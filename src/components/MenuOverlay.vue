<script setup>
import Mdi_github from './icons/mdi_github.vue'
import Mdi_linkedin from './icons/mdi_linkedin.vue'
import Mdi_linktree from './icons/mdi_linktree.vue'
</script>

<template>
  <div
    class="flex w-max flex-col items-center justify-start gap-8 rounded-lg border-[3px] border-Brown bg-LightBrown p-6"
    style="box-shadow: 4px 8px 4px 0 rgba(0, 0, 0, 0.25)"
  >
    <ul
      class="relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6 self-stretch"
    >
      <RouterLink to="">Réalisations</RouterLink>
      <RouterLink to="">Projets personnels</RouterLink>
      <RouterLink to="">À propos</RouterLink>
      <RouterLink to="">Contact</RouterLink>
      <RouterLink to="">Mentions légales</RouterLink>
    </ul>
    <ul class="flex flex-shrink-0 flex-grow-0 items-center justify-start gap-8">
      <RouterLink><Mdi_github /></RouterLink>
      <RouterLink><Mdi_linkedin /></RouterLink>
      <RouterLink><Mdi_linktree /></RouterLink>
    </ul>
  </div>
</template>
