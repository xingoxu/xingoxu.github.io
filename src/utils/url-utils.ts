import type { CollectionEntry } from 'astro:content';
import { siteConfig } from '@/config';
import i18nKey from '@i18n/i18nKey';
import {
  Languages,
  i18n,
} from '@i18n/translation';
import { format } from 'date-fns';

export function pathsEqual(
  path1: string,
  path2: string,
) {
  const normalizedPath1 = path1
    .replace(/^\/|\/$/g, '')
    .toLowerCase();
  const normalizedPath2 = path2
    .replace(/^\/|\/$/g, '')
    .toLowerCase();
  return normalizedPath1 === normalizedPath2;
}

function joinUrl(...parts: string[]): string {
  const joined = parts.join('/');
  return joined.replace(/\/+/g, '/');
}

export function getPostSlugWithoutLang(
  post: CollectionEntry<'posts'>,
) {
  const [lang, ...slug] = post.slug.split('/');
  const isForeignPost =
    slug.length > 0 &&
    (Languages as string[]).includes(lang);
  return {
    isForeignPost,
    lang: isForeignPost ? lang : siteConfig.lang,
    slug: isForeignPost
      ? slug.join('/')
      : post.slug,
  };
}

export function getPostUrl(
  post: CollectionEntry<'posts'>,
) {
  const { isForeignPost, slug, lang } =
    getPostSlugWithoutLang(post);

  return url(
    `/${isForeignPost ? `${lang}/` : ''}${format(
      post.data.published,
      'yyyy/MM',
    )}/${slug}/`,
  );
}

export function getCategoryUrl(
  category: string,
): string | null {
  if (!category) return null;
  if (category === i18n(i18nKey.uncategorized))
    return url(
      '/archive/category/uncategorized/',
    );
  return url(`/archive/category/${category}/`);
}

export function getDir(path: string): string {
  const lastSlashIndex = path.lastIndexOf('/');
  if (lastSlashIndex < 0) {
    return '/';
  }
  return path.substring(0, lastSlashIndex + 1);
}

export function url(path: string) {
  return joinUrl(
    '',
    import.meta.env.BASE_URL,
    path,
  );
}
