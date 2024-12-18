<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type: 'tool' | 'language'
    name: string
    data?: any
  }>(),
  {
    type: 'tool',
    name: 'Nom'
  }
)
import { pb } from '@/backend';
const img = pb.getFileUrl(props.data, props.data.img)

</script>

<template>
  <div
    class="flex flex-col space-y-4 rounded-lg border-2 border-DarkBrown bg-White p-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:flex-row md:space-y-0 md:space-x-4"
  >
    <h4 class="self-center md:self-start">{{ name }}</h4>
    <img :src="img" :alt="name" class="self-center w-16 h-16 object-contain md:w-24 md:h-24" />
  </div>
</template>
