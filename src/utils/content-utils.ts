import { getCollection } from 'astro:content';
import { siteConfig } from '@/config';
import I18nKey from '@i18n/i18nKey';
import { i18n } from '@i18n/translation';
import MarkdownIt from 'markdown-it';
import { getPostSlugWithoutLang } from './url-utils';

export async function getSortedPosts(
  lang?: string,
) {
  let allBlogPosts = await getCollection(
    'posts',
    ({ data }) => {
      return import.meta.env.PROD
        ? data.draft !== true
        : true;
    },
  );
  if (lang === siteConfig.lang) {
    allBlogPosts = allBlogPosts.filter(post => {
      const { isForeignPost } =
        getPostSlugWithoutLang(post);
      return !isForeignPost;
    });
  } else if (lang) {
    allBlogPosts = allBlogPosts.filter(post =>
      post.id.startsWith(`${lang}/`),
    );
  }

  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateA > dateB ? -1 : 1;
  });

  // TODO: deprecate below
  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].id;
    sorted[i].data.nextTitle =
      sorted[i - 1].data.title;
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].id;
    sorted[i].data.prevTitle =
      sorted[i + 1].data.title;
  }

  return sorted;
}

export type Tag = {
  name: string;
  count: number;
};

export async function getTagList(): Promise<
  Tag[]
> {
  const allBlogPosts = await getCollection(
    'posts',
    ({ data }) => {
      return import.meta.env.PROD
        ? data.draft !== true
        : true;
    },
  );

  const countMap: { [key: string]: number } = {};
  allBlogPosts.map(post => {
    (post.data.tags || []).map((tag: string) => {
      if (!countMap[tag]) countMap[tag] = 0;
      countMap[tag]++;
    });
  });

  // sort tags
  const keys: string[] = Object.keys(
    countMap,
  ).sort((a, b) => {
    return a
      .toLowerCase()
      .localeCompare(b.toLowerCase());
  });

  return keys.map(key => ({
    name: key,
    count: countMap[key],
  }));
}

export type Category = {
  name: string;
  count: number;
};

export async function getCategoryList(): Promise<
  Category[]
> {
  const allBlogPosts = await getCollection(
    'posts',
    ({ data }) => {
      return import.meta.env.PROD
        ? data.draft !== true
        : true;
    },
  );
  const count: { [key: string]: number } = {};
  allBlogPosts.map(post => {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized);
      count[ucKey] = count[ucKey]
        ? count[ucKey] + 1
        : 1;
      return;
    }
    count[post.data.category] = count[
      post.data.category
    ]
      ? count[post.data.category] + 1
      : 1;
  });

  const lst = Object.keys(count).sort((a, b) => {
    return a
      .toLowerCase()
      .localeCompare(b.toLowerCase());
  });

  const ret: Category[] = [];
  for (const c of lst) {
    ret.push({ name: c, count: count[c] });
  }
  return ret;
}

const parser = new MarkdownIt({ html: true });
// return exerpt if there's <!-- more -->
// or return null
export function getContentExerpt(
  content: string | undefined,
) {
  // undefined when content is empty (maybe it's draft)
  if (!content) return null;
  const splittedContent = content.split(
    '<!-- more -->',
  );
  if (splittedContent.length >= 2)
    return parser.render(splittedContent[0]);
  return null;
}
