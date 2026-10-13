<script setup>
import LogoIcon from '../components/LogoIcon.vue'
import { useLang } from '../useLang.js'
const { t } = useLang()
</script>

<template>
  <div class="hero hero-sm" :class="{ 'hero-split': t.nosotros.heroImage }">
    <LogoIcon v-if="!t.nosotros.heroImage" class="mark" />
    <div class="wrap">
      <div class="hero-text">
        <div class="kicker" style="color:#ffd9da">{{ t.nosotros.kicker }}</div>
        <h1>{{ t.nosotros.title }}</h1>
        <p>{{ t.nosotros.intro }}</p>
      </div>
      <img v-if="t.nosotros.heroImage" class="hero-photo" :src="t.nosotros.heroImage" alt="Planta EcoFruit en Romeral" />
    </div>
  </div>

  <section>
    <div class="wrap">
      <div class="team-head">
        <div class="kicker">{{ t.nosotros.teamKicker }}</div>
        <h2>{{ t.nosotros.teamTitle }}</h2>
        <p>{{ t.nosotros.teamText }}</p>
      </div>
      <div class="team">
        <figure class="team-main">
          <img :src="t.nosotros.teamImage" :alt="t.nosotros.teamCaption" loading="lazy" />
          <figcaption>{{ t.nosotros.teamCaption }}</figcaption>
        </figure>
        <figure class="team-side">
          <img :src="t.nosotros.truckImage" :alt="t.nosotros.truckCaption" loading="lazy" />
          <figcaption>{{ t.nosotros.truckCaption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="soft">
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

  <section>
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
