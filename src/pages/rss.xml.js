import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const posts = (await getCollection('blog'))
    .filter(p => !p.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Michele Ferracin — Software Engineering Blog',
    description: 'Articoli su DevOps, CI/CD, organizzazione dei team, Kubernetes, Kanban, AI per lo sviluppo software e pratiche moderne di ingegneria del software.',
    site: context.site,
    items: posts.map(post => {
      const body = (post.body ?? '').replace(/^---[\s\S]*?---/, '').replace(/<[^>]+>/g, '').replace(/[#*_\[\]()]/g, '').trim();
      const excerpt = body.split('\n').filter(l => l.trim().length > 10)[0] || '';
      return {
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: excerpt.slice(0, 200),
        link: `${base}blog/${post.id}/`,
      };
    }),
    customData: `<language>it-IT</language>
<managingEditor>info@micheleferracin.it (Michele Ferracin)</managingEditor>
<webMaster>info@micheleferracin.it (Michele Ferracin)</webMaster>
<copyright>© ${new Date().getFullYear()} Michele Ferracin</copyright>
<category>Software Engineering</category>
<category>DevOps</category>
<category>CI/CD</category>
<category>Organizzazione dei team</category>
<category>Kubernetes</category>`,
  });
}
