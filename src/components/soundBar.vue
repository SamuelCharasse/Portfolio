<template>
  <div class="flex flex-col gap-2 rounded-lg bg-LightBrown p-4 shadow-md border-Brown border-2">
    <div class="flex justify-between items-center">
      <button @click="playRandomSound">Play</button>
      <button @click="pauseSound">Pause</button>
    </div>
    <div class="flex flex-col">
      <label for="volume">Volume: {{ volume }}</label>
      <input
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        v-model="volume"
        @input="adjustVolume"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Howl, Howler } from 'howler'

// Définir les props
const props = defineProps<{
  playlist: string[]
}>()

let currentSound: Howl | null = null

// Volume réactif
const volume = ref(0.1)

// Méthode pour lire un son aléatoire
const playRandomSound = () => {
  if (currentSound && currentSound.playing()) {
    currentSound.stop()
  }
  const randomIndex = Math.floor(Math.random() * props.playlist.length)
  currentSound = new Howl({
    src: [props.playlist[randomIndex]],
    volume: volume.value,
    loop: false
  })
  currentSound.play()
}

// Méthode pour mettre en pause le son
const pauseSound = () => {
  if (currentSound) {
    currentSound.pause()
  }
}

// Méthode pour ajuster le volume général
const adjustVolume = () => {
  Howler.volume(volume.value)
}

// Initialiser le volume général
Howler.volume(volume.value)

// Arrêter le son actuel lorsque la playlist change
watch(() => props.playlist, () => {
  if (currentSound && currentSound.playing()) {
    currentSound.stop()
  }
})
</script>