import { XMLParser } from 'fast-xml-parser';

const blog = new URL('https://blog.aidaon.com/');

export async function getLatestPost() {
  try {
    const response = await fetch(new URL('feed.xml', blog), { signal: AbortSignal.timeout(4000) });
    if (!response.ok) throw new Error('Blog feed unavailable');
    const feed = new XMLParser({
      isArray: (_name, path) => path === 'rss.channel.item',
    }).parse(await response.text());
    const item = feed.rss.channel.item[0];
    const url = new URL(item.link);
    if (url.origin === blog.origin && typeof item.title === 'string' && item.title.trim()) {
      return { url: url.href, title: item.title };
    }
  } catch {
    // The blog index still leads to current posts when a build cannot read the feed.
  }
  return { url: new URL('#records', blog).href, title: '블로그 최신 글 보기' };
}
