import { getCollection } from 'astro:content';
import { siteConfig } from '@/config';
import rss from '@astrojs/rss';
import { getPostUrl } from '@utils/url-utils';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
const parser = new MarkdownIt();

export async function GET(context: any) {
  const blog = await getCollection('posts');
  return rss({
    title: siteConfig.title,
    description:
      siteConfig.subtitle || 'No description',
    site: context.site,
    items: blog.map(post => ({
      title: post.data.title,
      pubDate: post.data.published,
      description:
        post.data.description ||
        (post.body.split('<!-- more -->')[0] &&
          sanitizeHtml(
            post.body.split('<!-- more -->')[0],
          )) ||
        '',
      link: getPostUrl(post),
      content: sanitizeHtml(
        parser.render(post.body),
        {
          allowedTags:
            sanitizeHtml.defaults.allowedTags.concat(
              ['img'],
            ),
        },
      ),
    })),
    customData: `<language>${siteConfig.lang}</language>`,
  });
}
