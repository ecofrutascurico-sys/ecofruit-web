<script setup>
import { reactive, ref } from 'vue'
import { useLang } from '../useLang.js'
import { site } from '../content/site.js'
const { t } = useLang()

const form = reactive({ nombre: '', empresa: '', correo: '', telefono: '', tipo: '', mensaje: '' })
const estado = ref('') // '', 'sending', 'ok', 'error'

// Envía a Netlify Forms (las solicitudes llegan al panel de Netlify y a tu correo)
async function enviar() {
  estado.value = 'sending'
  const data = new URLSearchParams({ 'form-name': 'cotizacion', ...form })
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    })
    if (!res.ok) throw new Error(res.status)
    estado.value = 'ok'
    Object.keys(form).forEach((k) => (form[k] = ''))
  } catch (e) {
    estado.value = 'error'
  }
}
</script>

<template>
  <section id="contacto">
    <div class="wrap contacto">
      <div class="sec">
        <div class="kicker">{{ t.contact.kicker }}</div>
        <h2 style="margin-top:12px">{{ t.contact.title }}</h2>
        <p style="color:var(--muted);margin:14px 0 0">{{ t.contact.text }}</p>
        <div class="datos">
          <div class="dato"><span>{{ t.contact.phoneLabel }}</span><strong><a :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener">{{ site.phone }}</a></strong></div>
          <div class="dato"><span>{{ t.contact.emailLabel }}</span><strong><a :href="`mailto:${site.email}`">{{ site.email }}</a></strong></div>
          <div class="dato"><span>{{ t.contact.placeLabel }}</span><strong>{{ site.place }}</strong></div>
        </div>
      </div>

      <form name="cotizacion" @submit.prevent="enviar">
        <div class="row2">
          <label for="f-nombre">{{ t.contact.form.name }}<input id="f-nombre" v-model="form.nombre" required /></label>
          <label for="f-empresa">{{ t.contact.form.company }}<input id="f-empresa" v-model="form.empresa" required /></label>
        </div>
        <div class="row2">
          <label for="f-correo">{{ t.contact.form.email }}<input id="f-correo" v-model="form.correo" type="email" required /></label>
          <label for="f-telefono">{{ t.contact.form.phone }}<input id="f-telefono" v-model="form.telefono" type="tel" /></label>
        </div>
        <label for="f-tipo">{{ t.contact.form.type }}
          <select id="f-tipo" v-model="form.tipo" required>
            <option value="" disabled>—</option>
            <option v-for="o in t.contact.form.types" :key="o" :value="o">{{ o }}</option>
          </select>
        </label>
        <label for="f-msg">{{ t.contact.form.message }}<textarea id="f-msg" v-model="form.mensaje" :placeholder="t.contact.form.placeholder"></textarea></label>
        <button class="btn" type="submit" :disabled="estado === 'sending'">
          {{ estado === 'sending' ? t.contact.form.sending : t.contact.form.submit }}
        </button>
        <p v-if="estado === 'ok'" class="ok">{{ t.contact.form.ok }}</p>
        <p v-if="estado === 'error'" class="err">{{ t.contact.form.error }}</p>
      </form>
    </div>
  </section>
</template>
