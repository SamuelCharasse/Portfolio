<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Loginout from './components/loginout.vue';
</script>
<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Itim&family=Rowdies:wght@300;400;700&display=swap" rel="stylesheet">
  </head>
  <div>
    <h1 class="text-3xl font-extrabold">Portfolio</h1>
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