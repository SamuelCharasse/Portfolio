<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterView } from 'vue-router';
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