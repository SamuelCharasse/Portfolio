<script setup>
import Mdi_github from './icons/mdi_github.vue'
import Mdi_linkedin from './icons/mdi_linkedin.vue'
import Mdi_linktree from './icons/mdi_linktree.vue'
</script>

<template>
  <div
    class="z-10 flex w-max flex-col items-center justify-start gap-8 rounded-lg border-[3px] border-Brown bg-LightBrown p-6"
    style="box-shadow: 4px 8px 4px 0 rgba(0, 0, 0, 0.25)"
  >
    <ul
      class="relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6 self-stretch"
    >
      <RouterLink class="hover:font-extrabold" to="/realisations">Réalisations</RouterLink>
      <RouterLink class="hover:font-extrabold" to="/projectSolo">Projets personnels</RouterLink>
      <RouterLink class="hover:font-extrabold" to="/about">À propos</RouterLink>
      <RouterLink class="hover:font-extrabold" to="">Contact</RouterLink>
      <RouterLink class="hover:font-extrabold" to="/legalmention">Mentions légales</RouterLink>
    </ul>
    <ul class="flex flex-shrink-0 flex-grow-0 items-center justify-start gap-8">
      <a href="https://github.com/SamuelCharasse" target="_blank" rel="noopener"
        ><Mdi_github class="hover:fill-DarkBrown"
      /></a>
      <a href="www.linkedin.com/in/samuel-charasse" target="_blank" rel="noopener"
        ><Mdi_linkedin class="hover:fill-DarkBrown"
      /></a>
      <a href="https://linktr.ee/voxorproduction" target="_blank" rel="noopener"
        ><Mdi_linktree class="hover:fill-DarkBrown"
      /></a>
    </ul>
  </div>
</template>
