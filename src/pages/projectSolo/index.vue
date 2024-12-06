<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Separateur1 from '@/components/icons/separateur1.vue'
import Separateur2 from '@/components/icons/separateur2.vue'
import Separateur3 from '@/components/icons/separateur3.vue'
import ImageTemplate from '@/components/ImageTemplate.vue'
</script>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-[url(/ScrollBackground2.webp)] h-full p-32">
    <div class="flex h-fit w-full flex-col items-center gap-4 bg-LightBrown p-2">
      <Separateur1 />
      <div>
        <h1>Idralwel - Tales of Aeshan</h1>
      </div>
      <div>
        <p>
          Dans les profondeurs d'un monde virtuel, une légende prend vie. Laissez-moi vous conter
          l'épopée d'Idralwel - Tales of Aeshan, un projet né de la passion et forgé par la
          persévérance.
        </p>
      </div>
      <ImageTemplate imageUrl="/IdralwelCarte.webp" caption="Carte du Royaume de Canaan" />
      <Separateur2 />
      <div>
        <h2>L'infini à portée de main</h2>
      </div>
      <div class="flex px-[124px] gap-8">
        <p>
          En 2014, tel un grimoire ancien, le projet s'ouvrit sous le nom mystérieux de "7 livres".
          Comme toute grande aventure, son chemin fut parsemé d'embûches et de détours. Pendant six
          longues années, une équipe de bénévoles dévoués œuvra dans l'ombre, donnant vie à un
          univers MMORPG au sein de Minecraft. En 2020, après un labeur acharné, l'alpha d'Idralwel
          vit enfin le jour. Les joueurs purent explorer les terres d'Aeshan, affronter des
          créatures fantastiques et percer les secrets d'un monde médiéval-fantastique
          minutieusement construit. Mais comme le phénix qui renaît de ses cendres, la fin de cette
          version marqua le début d'une nouvelle ère.Le cœur battant du projet, ses membres les plus
          dévoués, refusa de baisser les bras. Tels des alchimistes, ils transformèrent leur vision.
          En quelques mois à peine, une idée plus réalisable mais tout aussi captivante émergea des
          braises de l'ancien projet.
        </p>
        <p>
          Aujourd'hui, Idralwel - Tales of Aeshan renaît sous la forme d'un RPG immersif. Que vous
          soyez un héros solitaire ou entouré de compagnons, les terres d'Aeshan vous attendent.
          Chaque recoin de ce monde recèle des aventures palpitantes, des quêtes épiques et des
          mystères à élucider. La magie d'Idralwel réside dans sa rejouabilité infinie. Chaque
          partie promet d'être unique, chaque choix de façonner votre destin. Les possibilités sont
          aussi vastes que l'imagination de ses créateurs. En tant que membre de cette équipe
          passionnée, j'ai eu l'honneur de contribuer à la gestion du projet, à la rédaction de son
          histoire riche, et à la coordination de nos talentueux bénévoles. Ensemble, nous avons
          appris à travailler en équipe, surmontant les défis avec créativité et détermination.
          Idralwel - Tales of Aeshan n'est pas qu'un simple jeu. C'est le fruit d'un rêve collectif,
          une odyssée numérique qui continue d'évoluer. Et qui sait quelles merveilles l'avenir nous
          réserve dans ce monde en perpétuelle expansion ?
        </p>
      </div>
      <Separateur3 />
      <div class="flex gap-8">
        <ImageTemplate imageUrl="/IdralwelAventurier.webp" caption="Capture de jeu représentant trois aventuriers" />
        <ImageTemplate imageUrl="/IdralwelEtang.webp" caption="Capture de jeu d'un étang dans une forêt" />
      </div>
    </div>
  </div>
</template>
