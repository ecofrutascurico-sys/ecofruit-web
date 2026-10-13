<script setup>
// Ilustraciones de cada fruta (dibujadas en SVG, en blanco sobre el color de la tarjeta).
// "k" es la clave de la fruta y "c" el color de la tarjeta, que se usa para los detalles.
defineProps({ k: String, c: String })
</script>

<template>
  <svg class="art" viewBox="0 0 120 120" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" fill-opacity=".93">
      <!-- Cereza -->
      <template v-if="k === 'cereza'">
        <path d="M44 66 C48 44 58 28 70 16" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
        <path d="M82 70 C80 50 76 32 70 16" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
        <path d="M70 16 C80 6 96 8 102 16 C92 24 80 24 70 16 Z" />
        <circle cx="40" cy="84" r="23" />
        <circle cx="84" cy="88" r="20" />
        <ellipse cx="32" cy="76" rx="5" ry="8" :fill="c" fill-opacity=".35" transform="rotate(-25 32 76)" />
        <ellipse cx="77" cy="81" rx="4" ry="7" :fill="c" fill-opacity=".35" transform="rotate(-25 77 81)" />
      </template>

      <!-- Cítricos: rodaja de naranja -->
      <template v-else-if="k === 'citricos'">
        <circle cx="60" cy="60" r="46" />
        <circle cx="60" cy="60" r="38" fill="none" :stroke="c" stroke-opacity=".45" stroke-width="2.5" />
        <g :stroke="c" stroke-opacity=".55" stroke-width="3.5" stroke-linecap="round">
          <line x1="60" y1="60" x2="60" y2="25" />
          <line x1="60" y1="60" x2="85" y2="35" />
          <line x1="60" y1="60" x2="95" y2="60" />
          <line x1="60" y1="60" x2="85" y2="85" />
          <line x1="60" y1="60" x2="60" y2="95" />
          <line x1="60" y1="60" x2="35" y2="85" />
          <line x1="60" y1="60" x2="25" y2="60" />
          <line x1="60" y1="60" x2="35" y2="35" />
        </g>
        <circle cx="60" cy="60" r="5" :fill="c" fill-opacity=".45" />
      </template>

      <!-- Uva: racimo -->
      <template v-else-if="k === 'uva'">
        <path d="M60 22 C62 14 66 8 72 6" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
        <path d="M64 18 C74 8 92 10 98 20 C86 28 72 26 64 18 Z" />
        <circle cx="36" cy="38" r="12" /><circle cx="60" cy="36" r="12" /><circle cx="84" cy="38" r="12" />
        <circle cx="48" cy="58" r="12" /><circle cx="72" cy="58" r="12" />
        <circle cx="36" cy="78" r="12" /><circle cx="60" cy="78" r="12" /><circle cx="84" cy="78" r="12" />
        <circle cx="48" cy="98" r="12" /><circle cx="72" cy="98" r="12" />
        <g :fill="c" fill-opacity=".3">
          <circle cx="32" cy="34" r="3" /><circle cx="56" cy="32" r="3" /><circle cx="80" cy="34" r="3" />
          <circle cx="44" cy="54" r="3" /><circle cx="68" cy="54" r="3" />
          <circle cx="32" cy="74" r="3" /><circle cx="56" cy="74" r="3" /><circle cx="80" cy="74" r="3" />
          <circle cx="44" cy="94" r="3" /><circle cx="68" cy="94" r="3" />
        </g>
      </template>

      <!-- Berries: frutilla y arándanos -->
      <template v-else-if="k === 'berries'">
        <path d="M30 40 C30 30 70 30 70 40 C72 66 58 92 50 100 C42 92 28 66 30 40 Z" />
        <path d="M32 36 L40 24 L46 32 L50 20 L54 32 L60 24 L68 36 Z" />
        <g :fill="c" fill-opacity=".4">
          <ellipse cx="42" cy="50" rx="2" ry="3" /><ellipse cx="58" cy="50" rx="2" ry="3" />
          <ellipse cx="50" cy="60" rx="2" ry="3" /><ellipse cx="40" cy="66" rx="2" ry="3" />
          <ellipse cx="60" cy="66" rx="2" ry="3" /><ellipse cx="50" cy="76" rx="2" ry="3" />
          <ellipse cx="45" cy="86" rx="2" ry="3" /><ellipse cx="55" cy="86" rx="2" ry="3" />
        </g>
        <circle cx="90" cy="62" r="16" />
        <circle cx="84" cy="92" r="14" />
        <g :fill="c" fill-opacity=".45">
          <path d="M86 52 L90 56 L94 52 L94 58 L86 58 Z" />
          <path d="M80 83 L84 86 L88 83 L88 88 L80 88 Z" />
        </g>
      </template>

      <!-- Kiwi: rodaja -->
      <template v-else-if="k === 'kiwi'">
        <ellipse cx="60" cy="60" rx="48" ry="44" />
        <ellipse cx="60" cy="60" rx="40" ry="36" fill="none" :stroke="c" stroke-opacity=".3" stroke-width="2" />
        <ellipse cx="60" cy="60" rx="14" ry="12" :fill="c" fill-opacity=".18" />
        <g :fill="c" fill-opacity=".6">
          <ellipse cx="60" cy="38" rx="2" ry="4" />
          <ellipse cx="60" cy="82" rx="2" ry="4" />
          <ellipse cx="38" cy="60" rx="4" ry="2" />
          <ellipse cx="82" cy="60" rx="4" ry="2" />
          <ellipse cx="44" cy="44" rx="2" ry="4" transform="rotate(-45 44 44)" />
          <ellipse cx="76" cy="44" rx="2" ry="4" transform="rotate(45 76 44)" />
          <ellipse cx="44" cy="76" rx="2" ry="4" transform="rotate(45 44 76)" />
          <ellipse cx="76" cy="76" rx="2" ry="4" transform="rotate(-45 76 76)" />
          <ellipse cx="51" cy="40" rx="1.6" ry="3.4" transform="rotate(-22 51 40)" />
          <ellipse cx="69" cy="40" rx="1.6" ry="3.4" transform="rotate(22 69 40)" />
          <ellipse cx="51" cy="80" rx="1.6" ry="3.4" transform="rotate(22 51 80)" />
          <ellipse cx="69" cy="80" rx="1.6" ry="3.4" transform="rotate(-22 69 80)" />
        </g>
      </template>

      <!-- Manzana -->
      <template v-else-if="k === 'manzana'">
        <path d="M60 36 C46 26 20 30 20 60 C20 88 40 108 52 106 C56 105 58 103 60 103 C62 103 64 105 68 106 C80 108 100 88 100 60 C100 30 74 26 60 36 Z" />
        <path d="M60 36 C60 26 62 18 66 12" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
        <path d="M64 22 C70 10 88 8 94 16 C84 26 72 26 64 22 Z" />
        <ellipse cx="38" cy="56" rx="6" ry="12" :fill="c" fill-opacity=".25" transform="rotate(20 38 56)" />
      </template>

      <!-- Pera -->
      <template v-else-if="k === 'pera'">
        <path d="M60 26 C50 26 46 36 46 48 C46 58 30 66 30 84 C30 100 44 110 60 110 C76 110 90 100 90 84 C90 66 74 58 74 48 C74 36 70 26 60 26 Z" />
        <path d="M60 28 C60 20 62 14 66 10" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
        <path d="M64 18 C70 6 86 6 92 12 C84 22 72 22 64 18 Z" />
        <ellipse cx="46" cy="82" rx="5" ry="11" :fill="c" fill-opacity=".25" transform="rotate(15 46 82)" />
      </template>
    </g>
  </svg>
</template>
