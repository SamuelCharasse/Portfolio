<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

interface MenuItem {
  id: string
  label: string
}

// Définition des props
const props = defineProps<{
  items: MenuItem[]
}>()

const activeSection = ref('')

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  // Observer les sections basées sur les props
  props.items.forEach((item) => {
    const section = document.getElementById(item.id)
    if (section) observer.observe(section)
  })
})
</script>

<template>
  <nav class="fixed right-4 top-1/3 z-50">
    <ul class="flex flex-col gap-4 rounded-lg border-2 border-Brown bg-LightBrown/50 hover:bg-LightBrown transition-all duration-300 p-4">
      <li>
        <RouterLink
          to="/"
          class="block rounded px-4 py-2 text-Brown transition-all duration-300 hover:text-DarkBrown"
        >
          ← Retour à l'accueil
        </RouterLink>
      </li>
      <li v-for="item in items" :key="item.id">
        <a
          @click.prevent="scrollToElement(item.id)"
          href="#"
          :class="[
            'block rounded px-4 py-2 transition-all duration-300',
            activeSection === item.id
              ? 'scale-105 transform bg-Brown text-LightBrown'
              : 'text-Brown hover:text-DarkBrown'
          ]"
        >
          {{ item.label }}
        </a>
      </li>
      <li>
        <button
          @click="scrollToTop"
          class="block w-full rounded px-4 py-2 text-Brown transition-all duration-300 hover:text-DarkBrown"
        >
          ↑ Haut de page
        </button>
      </li>
    </ul>
  </nav>
</template>
