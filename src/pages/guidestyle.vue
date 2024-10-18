<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import BtnDefault from '@/components/boutons/btnDefault.vue'
import SoundOff from '@/components/icons/soundOff.vue'
import SoundOn from '@/components/icons/soundOn.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'
import Tile from '@/components/Tile.vue'
import { ref } from 'vue'

const isSoundOn = ref(true);

const toggleSound = () => {
  isSoundOn.value = !isSoundOn.value;
};

</script>
<template>
  <div class="flex flex-col gap-4">
    <h1>Guide de style</h1>
    <BtnDefault>Envoyer un message</BtnDefault>
    <MenuOverlay />
    <Tile></Tile>
    <SoundOn v-if="isSoundOn" @click="toggleSound"></SoundOn>
    <SoundOff v-else @click="toggleSound"></SoundOff>
  </div>
</template>
