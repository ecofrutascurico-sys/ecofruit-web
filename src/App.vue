<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { site } from './content/site.js'
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
  <a class="wa" :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener">WhatsApp</a>
</template>
