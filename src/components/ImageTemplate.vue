<script setup lang="ts">
import { defineProps } from 'vue'

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
</script>

<template>
  <div class="image-frame">
    <img :src="imageUrl" alt="Image" class="image" />
    <p class="caption">{{ caption }}</p>
  </div>
</template>

<style scoped>
.image-frame {
  border: 2px solid #3f2a13; /* DarkBrown */
  padding: 10px;
  display: inline-block;
  text-align: center;
  background-color: #ddc99c; /* LightBrown */
}

.image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.caption {
  margin-top: 10px;
  font-size: 1rem;
  color: #3f2a13; /* DarkBrown */
}
</style>
