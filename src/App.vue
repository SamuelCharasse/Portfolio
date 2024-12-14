<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Itim&family=Rowdies:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <main>
    <Suspense>
      <RouterView :key="$route.path" />
    </Suspense>
  </main>
</template>
