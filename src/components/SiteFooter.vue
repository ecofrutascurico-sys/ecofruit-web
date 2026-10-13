<script setup>
import LogoFull from './LogoFull.vue'
import { useLang } from '../useLang.js'
import { site } from '../content/site.js'
const { t } = useLang()
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="wrap">
      <div>
        <div class="logo" style="width:170px"><LogoFull /></div>
        <p style="margin-top:10px;opacity:.8">{{ t.footer.tagline }}</p>
      </div>
      <div>
        <h4>{{ t.footer.contact }}</h4>
        <p>{{ site.phone }}</p>
        <p>{{ site.email }}</p>
      </div>
      <div>
        <h4>{{ t.footer.place }}</h4>
        <p><a :href="site.mapsUrl" target="_blank" rel="noopener">{{ site.place }}</a></p>
        <p>
          <a v-if="site.instagram" :href="site.instagram" target="_blank" rel="noopener">Instagram</a>
          <template v-if="site.instagram && site.facebook"> · </template>
          <a v-if="site.facebook" :href="site.facebook" target="_blank" rel="noopener">Facebook</a>
        </p>
      </div>
      <div class="copy">© {{ year }} Eco Fruit SpA</div>
    </div>
  </footer>
</template>
