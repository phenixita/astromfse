import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter(p => !p.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Michele Ferracin — Software Engineering Blog',
    description: 'Articoli su DevOps, CI/CD, Team Topologies, Kubernetes, Kanban, AI per lo sviluppo software e pratiche moderne di ingegneria del software.',
    site: context.site,
    items: posts.map(post => {
      const body = (post.body ?? '').replace(/^---[\s\S]*?---/, '').replace(/<[^>]+>/g, '').replace(/[#*_\[\]()]/g, '').trim();
      const excerpt = body.split('\n').filter(l => l.trim().length > 10)[0] || '';
      return {
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: excerpt.slice(0, 200),
        link: `/blog/${post.id}/`,
      };
    }),
    customData: `<language>it-IT</language>
<managingEditor>info@micheleferracin.it (Michele Ferracin)</managingEditor>
<webMaster>info@micheleferracin.it (Michele Ferracin)</webMaster>
<copyright>© ${new Date().getFullYear()} Michele Ferracin</copyright>
<category>Software Engineering</category>
<category>DevOps</category>
<category>CI/CD</category>
<category>Team Topologies</category>
<category>Kubernetes</category>`,
  });
}
