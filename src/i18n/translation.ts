import { siteConfig } from '../config';
import type I18nKey from './i18nKey';
import { en } from './languages/en';
import { ja } from './languages/ja';
import { zh_CN } from './languages/zh_CN';
import { zh_TW } from './languages/zh_TW';

export type Translation = {
  [K in I18nKey]: string;
};

const defaultTranslation = en;

const map = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
};

type Lang = keyof typeof map;
export const Languages = Object.keys(
  map,
) as Array<keyof typeof map>;

export function getTranslation(
  lang: string,
): Translation {
  return (
    map[lang.toLowerCase() as Lang] ||
    defaultTranslation
  );
}

export function i18n(
  key: I18nKey,
  lang?: string,
): string {
  const _lang = lang || siteConfig.lang || 'en';
  return getTranslation(_lang)[key];
}
