import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config';
import { LinkPreset } from './types/config';

export const siteConfig: SiteConfig = {
  title: "xingo's private plot",
  subtitle: '大龄萌二 失踪人口',
  lang: 'zh_cn', // key in src/i18n/translation.ts:map
  themeColor: {
    hue: 200, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: '/favicon.ico',
    },
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/xingoxu', // Internal links should not include the base path, as it is automatically added
    //   external: true, // Show an external link icon and will open in a new tab
    // },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: 'https://static.xingoxu.com/avatar.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'xingo',
  bio: '大龄萌二 失踪人口',
  links: [
    {
      name: 'X-Twitter',
      icon: 'fa6-brands:x-twitter', // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com/xingoxu',
    },
    {
      name: '微博',
      icon: 'fa6-brands:weibo',
      url: 'https://weibo.com/pokemonxu',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/xingoxu',
    },
    {
      name: 'rss',
      icon: 'fa6-solid:square-rss',
      url: '/rss.xml',
    },
    {
      name: 'mail',
      icon: 'material-symbols:mail-outline',
      url: 'mailto:admin@xingoxu.com',
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
};
