<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
    <header>
        <div class="wrapper">
            <h1 class="text-2xl bg-slate-400">Template About</h1>
        </div>
    </header>
    <main>
        <RouterView/>
    </main>
</template>