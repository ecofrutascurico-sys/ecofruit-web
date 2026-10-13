<script setup>
import { useLang } from '../useLang.js'
const { t } = useLang()
const kickerColor = { may: '#d9831f', agro: 'var(--green-2)', cas: 'var(--red)', est: 'var(--fg)' }
</script>

<template>
  <section class="soft">
    <div class="wrap">
      <div class="center">
        <div class="kicker">{{ t.lines.kicker }}</div>
        <h2>{{ t.lines.title }}</h2>
      </div>
      <div class="lineas">
        <div v-for="(l, i) in t.lines.items" :key="i" class="linea">
          <h3>{{ l.title }}</h3>
          <p>{{ l.text }}</p>
          <div class="esp">{{ l.fruits }}</div>
        </div>
      </div>
      <div class="clientes">
        <div v-for="c in t.lines.clients" :key="c.key" class="cli" :class="c.key">
          <div class="kicker" :style="{ color: kickerColor[c.key] }">{{ c.kicker }}</div>
          <h3>{{ c.title }}</h3>
          <p>{{ c.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
