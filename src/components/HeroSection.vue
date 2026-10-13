<script setup>
import LogoIcon from './LogoIcon.vue'
import { useLang } from '../useLang.js'
const { t } = useLang()
</script>

<template>
  <div
    id="inicio"
    class="hero"
    :class="{ 'has-img': t.hero.image }"
    :style="t.hero.image ? { backgroundImage: `url(${t.hero.image})` } : null"
  >
    <LogoIcon class="mark" />
    <div class="wrap">
      <div class="kicker" style="color:#ffd9da">{{ t.hero.kicker }}</div>
      <h1>{{ t.hero.title }} <span>{{ t.hero.titleAccent }}</span></h1>
      <p>{{ t.hero.text }}</p>
      <div class="ctas">
        <a class="btn" href="#que">{{ t.hero.cta1 }}</a>
        <a class="btn ghost" href="#contacto">{{ t.hero.cta2 }}</a>
      </div>
      <div class="scroll">↓ {{ t.hero.scroll }}</div>
    </div>
  </div>
</template>
