<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Separateur1 from '@/components/icons/separateur1.vue'
import Separateur2 from '@/components/icons/separateur2.vue'
import separateur3 from '@/components/icons/separateur3.vue'
import btnDefault from '@/components/boutons/btnDefault.vue'
import MenuAncre from '@/components/MenuAncre.vue'
import { useSeoMeta } from '@unhead/vue'
import SoundBar from '@/components/soundBar.vue'

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
</script>
<template>
  <div class="flex h-full flex-col gap-8 bg-[url(/ScrollBackground2.webp)] p-32">
    <MenuAncre :items="[]" />
    <div class="flex h-fit w-full flex-col items-center gap-8 bg-LightBrown py-8">
      <Separateur1 />
      <h2>Réalisations</h2>
      <Separateur2 />
      <section class="flex gap-8 p-32">
        <div class="flex w-fit flex-col items-center gap-6">
          <h3>Abyssal Wave</h3>
          <p>
            “Abyssal Wave” ou “Vague Abyssal” est un projet de premier semestre. Nous devions
            réaliser un site mobile qui avait pour thème : “Réplique”. Site uniquement en version
            mobile !
          </p>
          <btnDefault
            ><a href="https://abyssal-wave.scharasse.fr/" target="_blank"></a>Lien vers Abyssal
            Wave</btnDefault
          >
        </div>
        <div class="flex w-fit flex-col items-center gap-6">
          <h3>Manteco</h3>
          <p>
            Mantéco est une initiative à l’origine du Pôle Nord Franche-Comté.Le projet est porté
            par une petite équipe de 4 personnes, tous travaillant en Nord Franche-Comté. Mantéco
            souhaite informer les Nord Francs-Comtois et leur proposer des solutions pour une
            mobilité plus douce, et respectueuse de l’environnement.
          </p>
          <btnDefault
            ><a href="https://manteco.scharasse.fr/" target="_blank"
              >Lien vers Manteco</a
            ></btnDefault
          >
        </div>
        <div class="flex w-fit flex-col items-center gap-6">
          <h3>Optima</h3>
          <p>
            Optima est un site promotionnel fictif d’une exposition d’architecture. Il a été conçu
            durant un examen de trois jours, maquette et intégration comprises. Site uniquement en
            version mobile !
          </p>
          <btnDefault
            ><a href="https://sae105.scharasse.fr/" target="_blank">Lien vers Optima</a></btnDefault
          >
        </div>
      </section>
      <separateur3 />
      <h2>À suivre...</h2>
    </div>
    <div class="fixed bottom-4 right-12">
      <SoundBar :playlist="playlistIndex" />
    </div>
  </div>
</template>
