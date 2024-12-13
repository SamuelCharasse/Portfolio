<template>
    <div class="absolute right-16 top-4 z-10">
      <label for="volume">Volume: {{ volume }}</label>
      <input type="range" id="volume" min="0" max="1" step="0.01" v-model="volume" @input="adjustVolume" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Howler } from 'howler';


// Volume réactif
const volume = ref(0.5);

// Méthode pour ajuster le volume général
const adjustVolume = () => {
  Howler.volume(volume.value);
};

// Initialiser le volume général
Howler.volume(volume.value);
</script>