<script setup lang="ts">
import { ref } from 'vue'

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
    <!-- Overlay pour le mode plein écran -->
    <div v-if="isFullScreen" 
         class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
         @click="toggleFullScreen">
      <img
        :src="imageUrl"
        alt="Image"
        class="max-h-[90vh] max-w-[90vw] rounded-lg object-contain cursor-pointer"
      />
    </div>

    <!-- Image normale -->
    <img
      v-else
      :src="imageUrl"
      alt="Image"
      @click="toggleFullScreen"
      class="h-[250px] w-full rounded-lg object-fill shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
    />
    <p class="mt-2 text-lightText">{{ caption }}</p>
  </div>
</template>