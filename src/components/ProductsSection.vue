<script setup>
import FruitArt from './FruitArt.vue'
import { useLang } from '../useLang.js'
const { t } = useLang()
// Color de cada tarjeta (se usa en los detalles de la ilustración)
// Fotos de cada fruta (en /public/img/frutas). Si una fruta no tiene foto, se usa el dibujo.
const fotos = { cereza: '/img/frutas/cereza.webp', citricos: '/img/frutas/citricos.webp', uva: '/img/frutas/uva.webp', berries: '/img/frutas/berries.webp', kiwi: '/img/frutas/kiwi.webp', manzana: '/img/frutas/manzana.webp', pera: '/img/frutas/pera.webp' }
const colores = { cereza: '#CF171C', citricos: '#d9831f', uva: '#5a2d5e', berries: '#3b2a6b', kiwi: '#5b7d2a', manzana: '#9e2a2b', pera: '#7f8f2e' }
</script>

<template>
  <section id="que">
    <div class="wrap">
      <div class="center">
        <div class="kicker">{{ t.products.kicker }}</div>
        <h2>{{ t.products.title }}</h2>
        <p>{{ t.products.text }}</p>
      </div>
      <div class="mosaico">
        <div
          v-for="p in t.products.items"
          :key="p.key"
          class="tile"
          :class="[`t-${p.key}`, { 'has-img': p.image }]"
          :style="p.image ? { backgroundImage: `url(${p.image})` } : null"
        >
          <img v-if="!p.image && fotos[p.key]" class="art photo" :src="fotos[p.key]" :alt="p.name" loading="lazy" />
          <FruitArt v-else-if="!p.image" :k="p.key" :c="colores[p.key]" />
          <span v-if="p.featured" class="badge">{{ t.products.badge }}</span>
          <h3>{{ p.name }}</h3>
          <p v-if="p.text">{{ p.text }}</p>
          <div class="dest"><span v-for="u in p.uses" :key="u">{{ u }}</span></div>
        </div>
      </div>
      <p class="mas">{{ t.products.more }}</p>
    </div>
  </section>
</template>
