<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col gap-2 border-2 w-fit">
    <img :src="imageUrl" alt="Image" class="h-[250px] object-fill stroke-Brown stroke-1 rounded-lg" />
    <p class="mt-2 text-base text-DarkBrown">{{ caption }}</p>
  </div>
</template>
