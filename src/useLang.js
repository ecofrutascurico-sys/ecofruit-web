import { ref, computed, watchEffect } from 'vue'
import es from './content/es.js'
import en from './content/en.js'

const messages = { es, en }

function initial() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch (e) { /* sin acceso a localStorage */ }
  return 'es'
}

const lang = ref(initial())

watchEffect(() => {
  document.documentElement.lang = lang.value
  try { localStorage.setItem('lang', lang.value) } catch (e) { /* ignorar */ }
})

export function useLang() {
  const t = computed(() => messages[lang.value])
  const setLang = (l) => { lang.value = l }
  return { lang, t, setLang }
}
