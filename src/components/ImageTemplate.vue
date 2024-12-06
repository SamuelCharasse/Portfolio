<script setup lang="ts">
import { ref } from 'vue'
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

const isFullScreen = ref(false)

const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value
}
</script>

<template>
  <div class="flex w-fit flex-col gap-2">
    <img
      :src="imageUrl"
      alt="Image"
      @click="toggleFullScreen"
      :class="[
        'shadow-4 h-[250px] w-full transform rounded-lg stroke-Brown stroke-1 object-fill transition-transform duration-300 ease-in-out hover:scale-110',
        isFullScreen
          ? 'max-w-screen z-50 h-auto max-h-screen w-auto cursor-pointer'
          : 'cursor-pointer'
      ]"
    />
    <p class="mt-2 text-lightText">{{ caption }}</p>
  </div>
</template>
