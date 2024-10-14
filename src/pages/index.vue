<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <main class="flex justify-center items-center min-h-screen overflow-hidden">
        <img 
        src="/src/assets/Portfolio Sam V2.webp" 
        alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
        class="max-w-full max-h-full object-contain">
        <RouterView/>
    </main>
</template>