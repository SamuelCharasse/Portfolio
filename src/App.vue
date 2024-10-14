<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Loginout from './components/loginout.vue';
</script>

<template>
  <div>
    <h1 class="text-3xl font-extrabold">Vue 3 + Vite + TypeScript</h1>
    <Loginout />
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </nav>
    </div>
  </div>
  <main>
    <Suspense>
      <RouterView :key="$route.path"/>
    </Suspense>
  </main>
</template>