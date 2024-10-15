<script setup>
import { ref, onMounted,onUnmounted } from 'vue'
import Mdi_github from './icons/mdi_github.vue';
import Mdi_linkedin from './icons/mdi_linkedin.vue';
import Mdi_linktree from './icons/mdi_linktree.vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeOverlay = () => {
  emit('close')
}
</script>

<template>

</template>
