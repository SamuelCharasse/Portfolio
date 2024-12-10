<script setup lang="ts">
import { ref, onMounted } from 'vue'

const menuItems = [
  { id: 'Tales', label: 'Tales of Aeshan' },
  { id: 'Fiction', label: 'Les Immortels' },
  { id: 'Cartes', label: 'Les Cartes' }
]

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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    threshold: 0.5
  })

  menuItems.forEach(item => {
    const section = document.getElementById(item.id)
    if (section) observer.observe(section)
  })
})
</script>

<template>
  <nav class="fixed right-8 top-1/3 z-50">
    <ul class="flex flex-col gap-4 rounded-lg border-2 border-Brown bg-LightBrown p-4">
      <li v-for="item in menuItems" :key="item.id">
        <a 
          @click.prevent="scrollToElement(item.id)"
          href="#"
          :class="[
            'block px-4 py-2 rounded transition-all duration-300 cursor-pointer',
            activeSection === item.id 
              ? 'text-LightBrown bg-Brown transform scale-105' 
              : 'text-Brown hover:text-DarkBrown'
          ]"
        >
          {{ item.label }}
        </a>
      </li>
      <li>
        <button 
          @click="scrollToTop"
          class="block w-full px-4 py-2 rounded transition-all duration-300 text-Brown hover:text-DarkBrown"
        >
          ↑ Haut de page
        </button>
      </li>
    </ul>
  </nav>
</template>