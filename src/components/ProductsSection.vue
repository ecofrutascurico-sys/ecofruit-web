<script setup>
import { useLang } from '../useLang.js'
const { t } = useLang()
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
