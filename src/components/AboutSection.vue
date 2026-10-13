<script setup>
import { useLang } from '../useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="quienes" class="soft">
    <div class="wrap about">
      <div class="sec">
        <div class="kicker">{{ t.about.kicker }}</div>
        <h2 style="margin-top:12px">{{ t.about.title }}</h2>
        <p v-for="(p, i) in t.about.paragraphs" :key="i">{{ p }}</p>
      </div>
      <div class="cifras">
        <div v-for="(s, i) in t.about.stats" :key="i" class="cifra">
          <strong>{{ s.value }}</strong><span>{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
