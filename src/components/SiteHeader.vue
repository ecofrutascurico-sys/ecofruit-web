<script setup>
import LogoFull from './LogoFull.vue'
import { useLang } from '../useLang.js'
const { lang, t, setLang } = useLang()
const links = ['inicio', 'quienes', 'que', 'contacto']
</script>

<template>
  <header class="top">
    <div class="wrap nav">
      <a class="logo" href="#inicio" aria-label="EcoFruit"><LogoFull /></a>
      <ul>
        <li v-for="id in links" :key="id"><a :href="`#${id}`">{{ t.nav[id] }}</a></li>
      </ul>
      <span class="lang">
        <button :class="{ on: lang === 'es' }" @click="setLang('es')">ES</button> |
        <button :class="{ on: lang === 'en' }" @click="setLang('en')">EN</button>
      </span>
    </div>
    <nav class="wrap mnav" :aria-label="t.nav.inicio">
      <a v-for="id in links" :key="id" :href="`#${id}`">{{ t.nav[id] }}</a>
    </nav>
  </header>
</template>
