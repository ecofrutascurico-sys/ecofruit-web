<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ValueChain from './components/ValueChain.vue'
import AboutSection from './components/AboutSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import LinesSection from './components/LinesSection.vue'
import CtaBand from './components/CtaBand.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { site } from './content/site.js'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <ValueChain />
    <AboutSection />
    <ProductsSection />
    <LinesSection />
    <CtaBand />
    <ContactSection />
  </main>
  <SiteFooter />
  <a class="wa" :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener">WhatsApp</a>
</template>
