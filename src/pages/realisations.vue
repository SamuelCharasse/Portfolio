<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Separateur1 from '@/components/icons/separateur1.vue'
import Separateur2 from '@/components/icons/separateur2.vue'
import Separateur3 from '@/components/icons/separateur3.vue'
import btnDefault from '@/components/boutons/btnDefault.vue'
import MenuAncre from '@/components/MenuAncre.vue'
import Menu from '@/components/icons/Menu.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'
import { useSeoMeta } from '@unhead/vue'
import { onMounted, ref } from 'vue'

// Gestion du SEO
useSeoMeta({
  title: 'Réalisations',
  description: 'Portofolio de Samuel Charasse, Narrative Designer et Développeur Web',
  ogDescription: 'Portofolio de Samuel Charasse, Narrative Designer et Développeur Web',
  ogTitle: 'Réalisations',
  ogImage: 'https://scharasse.fr/Avatar.webp'
})
//Playlist de la page
const playlistIndex = [
  '/sounds/SoundIndex.mp3',
  '/sounds/SoundIndex2.mp3',
  '/sounds/SoundIndex3.mp3',
  '/sounds/SoundIndex4.mp3'
]
onMounted(() => {
  const btn = document.getElementById('set') as HTMLButtonElement
  if (btn) {
    btn.click()
    btn.remove()
  }
})

// Gestion du menu
const showMenuOverlay = ref(false)

const toggleMenuOverlay = () => {
  showMenuOverlay.value = !showMenuOverlay.value
}

const closeMenuOverlay = () => {
  showMenuOverlay.value = false
}
</script>
<template>
  <!-- Menu positionné -->
  <div class="fixed left-12 top-4 z-10 md:hidden">
    <Menu @click="toggleMenuOverlay" />
  </div>
  <MenuOverlay v-if="showMenuOverlay" @close="closeMenuOverlay" class="fixed left-0 top-20" />
  <div class="flex h-full flex-col gap-8 bg-[url(/ScrollBackground2.webp)] p-4 md:p-32">
    <MenuAncre :items="[]" class="hidden md:block" />
    <div class="flex h-fit w-full flex-col items-center gap-8 bg-LightBrown py-8">
      <Separateur1 />
      <h2>Réalisations</h2>
      <Separateur2 />
      <section class="flex flex-col gap-8 p-4 md:flex-row md:p-32">
        <div class="flex w-full flex-col items-center gap-6 md:w-fit">
          <h3>Abyssal Wave</h3>
          <p class="text-center md:text-left">
            “Abyssal Wave” ou “Vague Abyssal” est un projet de premier semestre. Nous devions
            réaliser un site mobile qui avait pour thème : “Réplique”. Site uniquement en version
            mobile !
          </p>
          <btnDefault>
            <a href="https://abyssal-wave.scharasse.fr/" target="_blank">Lien vers Abyssal Wave</a>
          </btnDefault>
        </div>
        <div class="flex w-full flex-col items-center gap-6 md:w-fit">
          <h3>Manteco</h3>
          <p class="text-center md:text-left">
            Mantéco est une initiative à l’origine du Pôle Nord Franche-Comté.Le projet est porté
            par une petite équipe de 4 personnes, tous travaillant en Nord Franche-Comté. Mantéco
            souhaite informer les Nord Francs-Comtois et leur proposer des solutions pour une
            mobilité plus douce, et respectueuse de l’environnement.
          </p>
          <btnDefault>
            <a href="https://manteco.scharasse.fr/" target="_blank">Lien vers Manteco</a>
          </btnDefault>
        </div>
        <div class="flex w-full flex-col items-center gap-6 md:w-fit">
          <h3>Optima</h3>
          <p class="text-center md:text-left">
            Optima est un site promotionnel fictif d’une exposition d’architecture. Il a été conçu
            durant un examen de trois jours, maquette et intégration comprises. Site uniquement en
            version mobile !
          </p>
          <btnDefault>
            <a href="https://sae105.scharasse.fr/" target="_blank">Lien vers Optima</a>
          </btnDefault>
        </div>
      </section>
      <Separateur3 />
      <h2>À suivre...</h2>
    </div>
  </div>
  <button id="set" @click="$emit('custom-event', playlistIndex)">Bouton test</button>
</template>
