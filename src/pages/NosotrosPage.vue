<script setup>
import LogoIcon from '../components/LogoIcon.vue'
import { useLang } from '../useLang.js'
const { t } = useLang()
</script>

<template>
  <div class="hero hero-sm">
    <LogoIcon class="mark" />
    <div class="wrap">
      <div class="kicker" style="color:#ffd9da">{{ t.nosotros.kicker }}</div>
      <h1>{{ t.nosotros.title }}</h1>
      <p>{{ t.nosotros.intro }}</p>
    </div>
  </div>

  <section>
    <div class="wrap mv">
      <article class="mv-card">
        <div class="kicker">01</div>
        <h2>{{ t.nosotros.missionTitle }}</h2>
        <p>{{ t.nosotros.mission }}</p>
      </article>
      <article class="mv-card vision">
        <div class="kicker">02</div>
        <h2>{{ t.nosotros.visionTitle }}</h2>
        <p>{{ t.nosotros.vision }}</p>
      </article>
    </div>
  </section>

  <section class="soft">
    <div class="wrap">
      <div class="center">
        <div class="kicker">{{ t.nosotros.kicker }}</div>
        <h2>{{ t.nosotros.valuesTitle }}</h2>
        <p>{{ t.nosotros.valuesText }}</p>
      </div>
      <div class="valores">
        <div v-for="v in t.nosotros.values" :key="v.title" class="valor">
          <LogoIcon />
          <h3>{{ v.title }}</h3>
          <p>{{ v.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="band">
    <div class="wrap">
      <h2>{{ t.band.title }}</h2>
      <RouterLink class="btn" :to="{ path: '/', hash: '#contacto' }">{{ t.nosotros.cta }}</RouterLink>
    </div>
  </div>
</template>
