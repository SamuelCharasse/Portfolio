<script setup lang="ts">
const props = withDefaults(defineProps<{
    type: 'job' | 'school',
    title: string,
    location: string,
    period: string, 
}>(), {
  type: 'job',
  title: 'Emploi',
  location: 'Lieu',
  period: '2024'
});
</script>

<template>
    <div class="rounded-lg bg-White border-2 border-DarkBrown p-4 space-y-4 flex flex-col drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <h3 :class="{ 'self-center' : props.type === 'school'}">{{ title }}</h3>
        <h4>{{ location }}</h4>
        <span class="self-center">{{ period }}</span>
    </div>
</template>