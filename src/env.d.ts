/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="swup" />

import { Swup } from 'swup';

declare global {
  interface Window {
    swup: Swup;
  }
}
