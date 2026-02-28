import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src', 'content', 'blog');

const MARKDOWN_YOUTUBE_LINK_RE = /\[([^\]]+)\]\((https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)[^)\s]+)\)/gi;
const BARE_YOUTUBE_URL_RE = /(^|[\s(>])((https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)[^\s<)]+))/gim;

function splitFrontmatter(text) {
  if (!text.startsWith('---\n')) {
    return { frontmatter: '', body: text };
  }

  const end = text.indexOf('\n---\n', 4);
  if (end === -1) {
    return { frontmatter: '', body: text };
  }

  return {
    frontmatter: text.slice(0, end + 5),
    body: text.slice(end + 5),
  };
}

function parseTimeToSeconds(input) {
  if (!input) {
    return undefined;
  }

  if (/^\d+$/.test(input)) {
    return Number.parseInt(input, 10);
  }

  const compact = input.trim().toLowerCase();
  const hMatch = compact.match(/(\d+)h/);
  const mMatch = compact.match(/(\d+)m/);
  const sMatch = compact.match(/(\d+)s/);
  const total =
    (hMatch ? Number.parseInt(hMatch[1], 10) * 3600 : 0) +
    (mMatch ? Number.parseInt(mMatch[1], 10) * 60 : 0) +
    (sMatch ? Number.parseInt(sMatch[1], 10) : 0);

  return total > 0 ? total : undefined;
}

function extractYoutubeInfo(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./i, '').toLowerCase();
  const parts = url.pathname.split('/').filter(Boolean);
  let videoId;

  if (host === 'youtu.be') {
    videoId = parts[0];
  } else if (host === 'youtube.com' || host === 'm.youtube.com') {
    if (parts[0] === 'watch') {
      videoId = url.searchParams.get('v') || undefined;
    } else if (parts[0] === 'shorts' || parts[0] === 'embed' || parts[0] === 'live') {
      videoId = parts[1] || undefined;
    }
  }

  if (!videoId) {
    return null;
  }

  const t = url.searchParams.get('t') || url.searchParams.get('start') || undefined;
  const start = parseTimeToSeconds(t);

  return { videoId, start };
}

function escapeHtml(input) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function normalizeTitle(text) {
  const trimmed = text.trim();
  if (!trimmed || /^https?:\/\//i.test(trimmed)) {
    return 'Video YouTube';
  }
  return trimmed;
}

function buildEmbedHtml({ videoId, start, title }) {
  const params = new URLSearchParams();
  if (typeof start === 'number' && start > 0) {
    params.set('start', String(start));
  }
  const query = params.toString();
  const src = `https://www.youtube-nocookie.com/embed/${videoId}${query ? `?${query}` : ''}`;

  return [
    '<div class="youtube-embed">',
    '  <iframe',
    `    src="${src}"`,
    `    title="${escapeHtml(title)}"`,
    '    loading="lazy"',
    '    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"',
    '    referrerpolicy="strict-origin-when-cross-origin"',
    '    allowfullscreen',
    '  ></iframe>',
    '</div>',
  ].join('\n');
}

function stripTrailingPunctuation(url) {
  const match = url.match(/^(.*?)([.,!?;:]+)$/);
  if (!match) {
    return { clean: url, suffix: '' };
  }
  return { clean: match[1], suffix: match[2] };
}

function convertBody(body) {
  let convertedCount = 0;
  let output = body;

  output = output.replace(MARKDOWN_YOUTUBE_LINK_RE, (full, label, rawUrl) => {
    const info = extractYoutubeInfo(rawUrl);
    if (!info) {
      return full;
    }

    convertedCount += 1;
    const embed = buildEmbedHtml({ ...info, title: normalizeTitle(label) });
    return `\n\n${embed}\n\n`;
  });

  output = output.replace(BARE_YOUTUBE_URL_RE, (full, prefix, rawUrl) => {
    if (/youtube-embed/.test(full)) {
      return full;
    }

    const { clean, suffix } = stripTrailingPunctuation(rawUrl);
    const info = extractYoutubeInfo(clean);
    if (!info) {
      return full;
    }

    convertedCount += 1;
    const embed = buildEmbedHtml({ ...info, title: 'Video YouTube' });
    return `${prefix}\n\n${embed}\n\n${suffix}`;
  });

  // Collapse excessive whitespace introduced by multiline replacements.
  output = output.replace(/\n{4,}/g, '\n\n\n');

  return { output, convertedCount };
}

function main() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

  let touchedFiles = 0;
  let convertedLinks = 0;

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const original = fs.readFileSync(filePath, 'utf-8');

    if (!/(youtube\.com|youtu\.be)/i.test(original)) {
      continue;
    }

    const { frontmatter, body } = splitFrontmatter(original);
    const { output, convertedCount } = convertBody(body);
    if (convertedCount === 0) {
      continue;
    }

    const next = `${frontmatter}${output}`;
    fs.writeFileSync(filePath, next, 'utf-8');

    touchedFiles += 1;
    convertedLinks += convertedCount;
    console.log(`Converted ${convertedCount} link(s): src/content/blog/${file}`);
  }

  console.log(`\nDone. Updated files: ${touchedFiles}. Converted links: ${convertedLinks}.`);
}

main();