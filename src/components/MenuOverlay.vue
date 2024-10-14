<script setup>
import { ref } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const closeOverlay = () => {
  emit('close');
};
</script>

<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-8 rounded shadow-lg">
      <h2 class="text-2xl mb-4">Overlay Content</h2>
      <p>Voici le contenu de l'overlay.</p>
      <button @click="closeOverlay" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Fermer</button>
    </div>
  </div>
</template>