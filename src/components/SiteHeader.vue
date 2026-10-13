<script setup>
import LogoFull from './LogoFull.vue'
import { useLang } from '../useLang.js'
const { lang, t, setLang } = useLang()

// Inicio, Qué hacemos y Contacto son secciones de la portada; Nosotros es una página aparte
const links = [
  { key: 'inicio', to: { path: '/', hash: '#inicio' } },
  { key: 'nosotros', to: '/nosotros' },
  { key: 'que', to: { path: '/', hash: '#que' } },
  { key: 'contacto', to: { path: '/', hash: '#contacto' } },
]
</script>

<template>
  <header class="top">
    <div class="wrap nav">
      <RouterLink class="logo" to="/" aria-label="EcoFruit"><LogoFull /></RouterLink>
      <ul>
        <li v-for="l in links" :key="l.key"><RouterLink :to="l.to">{{ t.nav[l.key] }}</RouterLink></li>
      </ul>
      <span class="lang">
        <button :class="{ on: lang === 'es' }" @click="setLang('es')">ES</button> |
        <button :class="{ on: lang === 'en' }" @click="setLang('en')">EN</button>
      </span>
    </div>
    <nav class="wrap mnav" aria-label="Menú">
      <RouterLink v-for="l in links" :key="l.key" :to="l.to">{{ t.nav[l.key] }}</RouterLink>
    </nav>
  </header>
</template>
