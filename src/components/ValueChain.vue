<script setup>
import LogoIcon from './LogoIcon.vue'
import { useLang } from '../useLang.js'
const { t } = useLang()
</script>

<template>
  <section>
    <div class="wrap">
      <div class="center">
        <div class="kicker">{{ t.chain.kicker }}</div>
        <h2>{{ t.chain.title }}</h2>
        <p>{{ t.chain.text }}</p>
      </div>
      <div class="cadena">
        <div v-for="(s, i) in t.chain.steps" :key="i" class="etapa">
          <div class="ic">
            <LogoIcon v-if="i === t.chain.steps.length - 1" />
            <template v-else>{{ i + 1 }}</template>
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
