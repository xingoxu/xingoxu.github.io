<script lang="ts">
  import { siteConfig } from "@/config";
  import Icon from "@iconify/svelte";
  import { getNewProps } from "@utils/change-language";
  import { url } from "@utils/url-utils";
  import { onMount } from "svelte";

  // biome-ignore lint/style/useConst: props
  export let menus: {
    lang: string;
    text: string;
    url: string;
    isCurrentLanguage?: boolean;
  }[] = [];

  let isPanelOpen = false;

  function showPanel() {
    console.log("LanguageSettings - showPanel");
    isPanelOpen = true;
  }

  function hidePanel() {
    console.log("LanguageSettings - hidePanel");
    isPanelOpen = false;
  }

  function changeLanguage() {
    getNewProps<{ menus: typeof menus }>("LanguageSettings", (newProps) => {
      menus = newProps.menus || menus;
    });
  }
  onMount(() => {
    if (window.swup.hooks) {
      window.swup.hooks.on("content:replace", changeLanguage);
    }
    return () => {
      if (window.swup.hooks) {
        window.swup.hooks.off("content:replace", changeLanguage);
      }
    };
  });
</script>

<!-- z-50 make the panel higher than other float panels -->
{#if menus.length > 0}
  <div
    class="relative z-50"
    role="menu"
    tabindex="-1"
    on:mouseleave={hidePanel}
  >
    <button
      aria-label="Light/Dark Mode"
      role="menuitem"
      class="relative btn-plain h-11 w-11 rounded-lg active:scale-90"
      id="scheme-switch"
      on:touchend={() => (isPanelOpen ? hidePanel() : showPanel())}
      on:mouseenter={showPanel}
    >
      <div class="absolute">
        <Icon icon="material-symbols:translate-rounded" class="text-[1.25rem]"
        ></Icon>
      </div>
    </button>

    <div
      id="language-setting-panel"
      class="block absolute transition top-11 -right-2 pt-5"
      class:float-panel-closed={!isPanelOpen}
    >
      <div class="float-panel p-2">
        {#each menus as menu}
          <a
            href={menu.lang === siteConfig.lang
              ? url("/")
              : url(`${menu.lang}/`)}
            on:click={hidePanel}
            class="whitespace-nowrap group flex justify-between items-center py-2 pl-3 pr-1 rounded-lg gap-8
                hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)] transition
            "
            class:current-language={menu.isCurrentLanguage}
          >
            <div
              class=" whitespace-nowrap transition text-black/75 dark:text-white/75 font-bold group-hover:text-[var(--primary)] group-active:text-[var(--primary)]"
            >
              {menu.text}
            </div>

            <Icon
              icon="material-symbols:chevron-right-rounded"
              class="transition text-[var(--primary)]"
              width={20}
              height={20}
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .current-language {
    background: var(--btn-plain-bg-hover);
    color: var(--primary);
  }
</style>
