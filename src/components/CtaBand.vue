<script setup>
import { useLang } from '../useLang.js'
const { t } = useLang()
</script>

<template>
  <div class="band">
    <div class="wrap">
      <h2>{{ t.band.title }}</h2>
      <a class="btn" href="#contacto">{{ t.band.cta }}</a>
    </div>
  </div>
</template>
