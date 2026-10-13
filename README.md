# Sitio web EcoFruit (ecofruit.cl)

Página hecha en Vue 3 + Vite. Se publica gratis en Netlify y se edita desde GitHub en el navegador, sin instalar nada.

---

## Guía paso a paso para publicarla

Tiempo estimado: 30 a 45 minutos la primera vez. Solo necesitas el navegador.

### Paso 1. Crear cuenta en GitHub (donde vive el código)

1. Entra a **github.com** y crea una cuenta gratis (puede ser con el correo de la empresa).
2. Arriba a la derecha, botón **+** → **New repository**.
3. Nombre: `ecofruit-web`. Marca **Private**. No marques ninguna otra opción. Botón **Create repository**.

### Paso 2. Subir los archivos

1. Descomprime el archivo `ecofruit-web.zip` en tu computador.
2. En la página del repositorio recién creado, haz clic en el enlace **uploading an existing file**.
3. Abre la carpeta descomprimida, selecciona **todo su contenido** (no la carpeta, lo que está adentro: `src`, `public`, `index.html`, `package.json`, etc.) y arrástralo a la página de GitHub.
4. Espera que termine de cargar y presiona **Commit changes**.

### Paso 3. Publicar en Netlify (el hosting gratis)

1. Entra a **netlify.com** → **Sign up** → elige **Sign up with GitHub** y autoriza.
2. Botón **Add new site** → **Import an existing project** → **GitHub**.
3. Elige el repositorio `ecofruit-web`. Netlify detecta solo la configuración (comando `npm run build`, carpeta `dist`). Presiona **Deploy**.
4. En 1 a 2 minutos la página queda en línea en una dirección tipo `nombre-al-azar.netlify.app`. Revísala ahí antes de conectar el dominio.
5. Opcional: en **Site configuration** → **Change site name** puedes ponerle `ecofruit` para que quede `ecofruit.netlify.app`.

### Paso 4. Activar el formulario de cotización

1. En Netlify, dentro del sitio: **Forms** (menú izquierdo) → **Enable form detection**.
2. Vuelve a publicar: **Deploys** → **Trigger deploy** → **Deploy site**.
3. Para recibir las cotizaciones por correo: **Site configuration** → **Notifications** → **Emails and webhooks** → **Form submission notifications** → **Add notification** → **Email notification** → escribe el correo donde quieres recibirlas.
4. Prueba enviando una cotización desde la página.

El plan gratis permite 100 solicitudes al mes, de sobra para empezar.

### Paso 5. Conectar el dominio ecofruit.cl

> **Importante:** si el correo `@ecofruit.cl` funciona hoy, no cambies los "servidores DNS" del dominio. Si lo haces, el correo puede dejar de llegar. Usa el método de abajo, que solo cambia la página.

1. En Netlify: **Domain management** → **Add a domain** → escribe `ecofruit.cl` → confirma. Netlify te mostrará los registros a configurar.
2. Averigua dónde se administra el DNS del dominio (normalmente en el panel del hosting antiguo, en Cloudflare, o en NIC Chile si nunca se cambió). Si no sabes, pregúntale al programador anterior: "¿dónde se administran los registros DNS de ecofruit.cl?".
3. En ese panel, cambia o crea estos dos registros (Netlify los muestra con los valores exactos):
   - Registro **A**, nombre `@` (o vacío) → `75.2.60.5`
   - Registro **CNAME**, nombre `www` → `ecofruit.netlify.app` (el nombre de tu sitio en Netlify)
4. No toques los registros **MX** ni **TXT** (son del correo).
5. Espera entre 1 y 24 horas. Netlify activa solo el candado de seguridad (HTTPS).

La página antigua sigue funcionando hasta que hagas este paso, así que no hay riesgo de quedar sin sitio mientras pruebas.

---

## Cómo editar la página después

Cada vez que guardas un cambio en GitHub, Netlify publica la nueva versión sola en 1 a 2 minutos.

### Cambiar textos

1. En GitHub, abre `src/content/es.js` (español) o `src/content/en.js` (inglés).
2. Haz clic en el **lápiz** (Edit), cambia solo el texto entre comillas y presiona **Commit changes**.
3. Cuida no borrar comillas, comas ni corchetes. Si algo se rompe, Netlify no publica y la página anterior sigue en línea.

Teléfono, correo, WhatsApp e Instagram están en `src/content/site.js`.

### Agregar fotos

1. Prepara las fotos en `.jpg`, de 1600 px de ancho como máximo y menos de 400 KB (puedes comprimirlas gratis en squoosh.app).
2. En GitHub entra a la carpeta `public/img` → **Add file** → **Upload files** → sube la foto → **Commit changes**.
3. En `src/content/es.js` y `en.js` escribe la ruta en el campo `image`, por ejemplo:
   - Portada: `image: '/img/portada.jpg'` (dentro de `hero`)
   - Cereza: `image: '/img/cereza.jpg'` (dentro del producto cereza)

Las tarjetas con foto oscurecen la imagen solas para que el texto se lea bien.

### Fuente Garet

Sube los archivos de Garet a `public/fonts` con estos nombres: `Garet-Book.woff2`, `Garet-Bold.woff2` y `Garet-Heavy.woff2` (también sirven en `.otf`). Mientras no estén, la página usa Outfit, que es muy parecida.

---

## Estructura (para un programador)

```
src/content/es.js, en.js   Textos por idioma (el sitio es data-driven)
src/content/site.js        Datos de contacto
src/components/            Una sección por componente
src/assets/styles.css      Estilos y colores de marca (#005029, #CF171C)
src/useLang.js             Cambio de idioma ES/EN (se recuerda en el navegador)
index.html                 SEO y formulario oculto para Netlify Forms
```

Comandos locales: `npm install`, `npm run dev`, `npm run build`.
