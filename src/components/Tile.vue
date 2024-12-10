<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import TileSection from '@/components/TileSection.vue'
</script>

<template>
  <div class="relative flex w-max items-center hover:scale-125 transition-all duration-300">
    <TileSection class="w-full" />
    <h3 class="absolute left-0 right-0 top-4 flex items-center justify-center">
      <slot>Projets personnels</slot>
    </h3>
  </div>
</template>
