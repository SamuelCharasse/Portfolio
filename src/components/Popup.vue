<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-Brown bg-opacity-50">
    <div class="flex flex-col gap-4 items-center justify-center rounded bg-gray-50 p-6 shadow-lg border-Brown border-4">
      <div>
        <p>Ce site est un portfolio immersif réalisé par Samuel Charasse.</p>
        <p>Il est en cours de développement et sera mis à jour régulièrement.</p>
        <p>Pour une meilleure expérience, l'usage d'un casque est conseillé !</p>
      </div>
      <btnDefault @click="closePopup">
        Explorer
      </btnDefault>
    </div>
  </div>
</template>

<script setup>
import btnDefault from './boutons/btnDefault.vue';

const emit = defineEmits(['close'])

const closePopup = () => {
  emit('close')
}
</script>
