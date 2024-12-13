<template>
  <div>
    <button @click="playSound">Play Sound</button>
    <button @click="pauseSound">Pause Sound</button>
    <button @click="stopSound">Stop Sound</button>
    <div>
      <label for="volume">Volume: {{ volume }}</label>
      <input type="range" id="volume" min="0" max="1" step="0.01" v-model="volume" @input="adjustVolume" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Howl, Howler } from 'howler';

// Créer une instance de Howl
const soundHome = new Howl({
  src: ['/sounds/SoundIndex.mp3'],
  volume: 0.3,
  loop: true
});

// Volume réactif
const volume = ref(0.1);

// Méthodes pour contrôler le son
const playSound = () => {
    if (!soundHome.playing()) {
      soundHome.play();
    }
};

const pauseSound = () => {
  soundHome.pause();
};

const stopSound = () => {
  soundHome.stop();
};

// Méthode pour ajuster le volume général
const adjustVolume = () => {
  Howler.volume(volume.value);
};

// Initialiser le volume général
Howler.volume(volume.value);
</script>