<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import SoundBar from '@/components/soundBar.vue'

const activeMusic = ref<string[]>([])

const handleCustomEvent = (value: any) => {
  console.log('Event received:', value)
  activeMusic.value = value
}
</script>
<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Itim&family=Rowdies:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" @custom-event="(value: string[]) => handleCustomEvent(value)" />
      </Suspense>
    </RouterView>
    <div class="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 md:left-auto md:right-4 md:transform-none">
    <SoundBar :playlist="activeMusic" />
  </div>
  </main>
</template>
