<template>
  <div class="flex flex-col gap-2 rounded-lg bg-LightBrown p-4 shadow-md border-Brown border-2">
    <div class="flex gap-2 justify-between items-center">
      <button @click="playSound">Lire</button>
      <button @click="pauseSound">Stop</button>
      <button @click="playNextSound">Suivant</button>
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
let currentIndex = ref(0)

// Volume réactif
const volume = ref(0.1)

// Méthode pour lire le son en cours ou le premier son
const playSound = () => {
  if (currentSound && currentSound.playing()) {
    return
  }
  playCurrentSound()
}

// Méthode pour lire le son actuel
const playCurrentSound = () => {
  if (currentSound && currentSound.playing()) {
    currentSound.stop()
  }
  currentSound = new Howl({
    src: [props.playlist[currentIndex.value]],
    volume: volume.value,
    loop: false,
    onend: () => {
      currentIndex.value = (currentIndex.value + 1) % props.playlist.length
      playCurrentSound()
    }
  })
  currentSound.play()
}

// Méthode pour lire le son suivant
const playNextSound = () => {
  currentIndex.value = (currentIndex.value + 1) % props.playlist.length
  playCurrentSound()
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
  currentIndex.value = 0
})
</script>