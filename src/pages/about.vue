<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Separateur1 from '@/components/icons/separateur1.vue'
import Separateur2 from '@/components/icons/separateur2.vue'
import CardAbout from '@/components/CardAbout.vue'
import SkillAbout from '@/components/SkillAbout.vue'
import Separateur3 from '@/components/icons/separateur3.vue'
import Arrow from '@/components/icons/Arrow.vue'
import MenuAncre from '@/components/MenuAncre.vue'
import Pocketbase from 'pocketbase'
import type { RecordModel } from 'pocketbase'
import { ref, onMounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'

// Gestion du SEO
useSeoMeta({
  title: 'À propos',
  description: 'Portofolio de Samuel Charasse, Narrative Designer et Développeur Web',
  ogDescription: 'Portofolio de Samuel Charasse, Narrative Designer et Développeur Web',
  ogTitle: 'À propos',
  ogImage: 'https://scharasse.fr/Avatar.webp'
})

const pb = new Pocketbase('https://portfolio-samuecharasse.pockethost.io/')
const CardData = ref<RecordModel[]>([])
const jobCards = ref<RecordModel[]>([])
const skillsTool = ref<RecordModel[]>([])
const skillsLanguage = ref<RecordModel[]>([])

onMounted(async () => {
  try {
    // Récupération des cards de type "job"
    const jobRecords = await pb.collection('CARDABOUT').getFullList({
      filter: 'type = "job"'
    })
    jobCards.value = jobRecords

    // Récupération des cards de type "other"
    const otherRecords = await pb.collection('CARDABOUT').getFullList({
      filter: 'type = "other"'
    })
    CardData.value = otherRecords

    // Récupération des compétences
    const toolRecords = await pb.collection('SKILLS').getFullList({
      filter: 'type = "tool"'
    })
    skillsTool.value = toolRecords
    // Ré"cupération des langages
    const languageRecords = await pb.collection('SKILLS').getFullList({
      filter: 'type = "language"'
    })
    skillsLanguage.value = languageRecords
  } catch (error) {
    console.error('Error fetching records:', error)
  }
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
    btn.click();
    btn.remove();
  }
})
</script>

<template>
  <div class="h-full w-full bg-[url(/ScrollBackground2.webp)] bg-fixed p-32">
    <MenuAncre
      :items="[
        { id: 'mon-histoire', label: 'Mon histoire' },
        { id: 'parcours-scolaire', label: 'Parcours scolaire' },
        { id: 'competences', label: 'Compétences' },
        { id: 'experiences', label: 'Expériences' }
      ]"
    />
    <div class="bg-LightBrown p-2">
      <div
        class="flex flex-col items-center space-y-8 p-28 *:flex *:flex-col *:items-center *:space-y-8"
      >
        <section class="flex flex-col items-center">
          <Separateur1 />
          <img src="/Avatar.webp" alt="" class="w-60 rounded-full" />
          <h1 id="mon-histoire">Mon histoire</h1>
          <p>
            Éternel curieux et touche à tout, je me lance parfois des défis farfelus ou dans des
            projets qui me font vibrer. Grand amoureux de la nature, du monde des jeux vidéos et de
            la créativité.
          </p>
        </section>
        <Separateur2 />
        <section>
          <h2 id="parcours-scolaire">Parcours scolaire</h2>
          <div class="flex items-center gap-5">
            <CardAbout
              type="school"
              title="BUT MMI"
              location="Métiers du Multimédia et d’Internet"
              period="2023-2026"
              class="w-1/2"
            />
            <Arrow direction="top" />
            <CardAbout
              type="school"
              title="Formation ARP"
              location="Animateur Radio Polyvalent à SudFormadia"
              period="2018"
              class="w-1/2"
            />
            <Arrow direction="bottom" />
            <CardAbout
              type="school"
              title="BAC STAV"
              location="Sciences et Technologies de l’Agronomie et du Vivant"
              period="2016"
              class="w-1/2"
            />
          </div>
          <p>
            Mon épopée scolaire débute avec un BAC STAV, option Valorisation des Espaces Naturels. À
            l'époque, mon rêve était de devenir soigneur animalier, gardien des créatures de la
            nature. Cependant, le destin avait d'autres plans pour moi. Comme guidé par un vent
            mystérieux, je me suis retrouvé à Toulouse, où j'ai embrassé une formation d'animateur
            radio polyvalent, troquant les murmures de la forêt contre les ondes hertziennes.<br />
            À l'issue de cette formation, le monde du travail m'a tendu ses bras, m'invitant à
            plonger dans ses contrées sauvages et indomptables. J'ai navigué sur ces eaux
            tumultueuses pendant quelques années, jusqu'à ce qu'une rencontre inattendue, telle une
            étoile guidant un voyageur égaré, m'ouvre la voie vers de nouveaux horizons académiques.
            C'est ainsi que j'ai repris le chemin des études, m'embarquant dans l'aventure d'un BUT
            MMI à Montbéliard, prêt à explorer de nouveaux territoires de connaissances et de
            compétences.
          </p>
        </section>
        <Separateur3 />
        <section>
          <h2 id="competences">Compétences</h2>
          <h3>Outils</h3>
          <div class="grid w-full grid-cols-5 gap-2">
            <SkillAbout
                v-for="card in skillsTool"
                :key="card.id"
                :type="card.type"
                :name="card.name"
                :data="card"
              />

          </div>
          <h3>Langages</h3>
          <div class="grid w-full grid-cols-5 gap-2">
            <SkillAbout
                v-for="card in skillsLanguage"
                :key="card.id"
                :type="card.type"
                :name="card.name"
                :data="card"
              />

          </div>
        </section>
        <Separateur3 />
        <section class="*:flex *:flex-col *:items-center *:space-y-8">
          <div>
            <h2 id="experiences">Expériences professionnelles</h2>
            <div class="grid w-full grid-cols-3 gap-2">
              <CardAbout
                v-for="card in jobCards"
                :key="card.id"
                :type="card.type"
                :title="card.title"
                :location="card.location"
                :period="card.period"
              />
            </div>
            <p>
              Mon odyssée professionnelle débute chez un fromager affineur à Clermont-Ferrand, la
              fromagerie Nivesse. Dans cet antre des saveurs, j'ai plongé dans l'univers fascinant
              des produits typiques de notre terroir, apprenant l'art délicat de préparer et
              travailler un produit vivant.<br />Ma seconde escale m'a conduit dans les coulisses de
              la restauration, où j'ai endossé le rôle de barman dans un restaurant à Aubière.
              Novice dans ce milieu effervescent, j'ai dû rapidement m'imprégner de ses codes. Cette
              expérience s'est révélée être une véritable école de vie, m'offrant de précieuses
              compétences en service clientèle et la capacité de travailler sous pression. Hélas, la
              vague impitoyable de la Covid-19 a emporté cet emploi... Le destin m'a alors guidé
              vers Besançon, où j'ai trouvé refuge au sein de la voirie propreté de la ville.
              Pendant un an et demi, j'ai arpenté les rues de la cité, cultivant l'esprit d'équipe,
              l'initiative et l'adaptabilité.<br />Ma dernière aventure en date m'a mené au Grand
              Bain, pour un emploi d'été. Telle une étoile filante, j'ai rapidement brillé, me
              voyant confier des responsabilités malgré mon statut d'intérimaire. Mon expérience
              passée de barman a su me démarquer, tant auprès de la clientèle que des responsables.
              Cette opportunité m'a permis d'affiner davantage mes compétences en travail d'équipe,
              initiative, autonomie et relation client.<br />Aujourd'hui, mon rêve serait de devenir
              Narrative Designer. Conscient de l'instabilité qui règne sur le marché de l'emploi
              dans le jeu vidéo, je continue à nourrir mes projets personnels, tel un jardinier
              patient, dans l'espoir qu'un jour, mes créations seront remarquées et pourront
              s'épanouir.
            </p>
          </div>
          <Separateur3 />
          <div class="w-full">
            <h2>Expériences diverses</h2>
            <div class="grid w-full grid-cols-3 gap-2">
              <CardAbout
                v-for="card in CardData"
                :key="card.id"
                :type="card.type"
                :title="card.title"
                :location="card.location"
                :period="card.period"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <button id="set" @click="$emit('custom-event', playlistIndex)">Bouton test</button>
</template>
