<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { NavBarLink } from "../../types/config";
  import { url } from "../../utils/url-utils";

  export let links: NavBarLink[];
  const togglePanel = () => {
    const menuPanel = document.getElementById("nav-menu-panel");
    menuPanel?.classList.toggle("float-panel-closed");
  };
</script>

<div
  id="nav-menu-panel"
  class="float-panel float-panel-closed absolute transition-all fixed right-4 px-2 py-2"
>
  {#each links as link}
    <a
      href={link.external ? link.url : url(link.url)}
      on:click={togglePanel}
      class="group flex justify-between items-center py-2 pl-3 pr-1 rounded-lg gap-8
            hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)] transition
        "
      target={link.external ? "_blank" : null}
    >
      <div
        class="transition text-black/75 dark:text-white/75 font-bold group-hover:text-[var(--primary)] group-active:text-[var(--primary)]"
      >
        {link.name}
      </div>
      {#if link.external}
        <Icon
          icon="fa6-solid:arrow-up-right-from-square"
          class="transition text-black/25 dark:text-white/25 -translate-x-1"
          width="12"
          height="12"
        />
      {:else}
        <Icon
          icon="material-symbols:chevron-right-rounded"
          class="transition text-[var(--primary)]"
          width={20}
          height={20}
        />
      {/if}
    </a>
  {/each}
</div>
