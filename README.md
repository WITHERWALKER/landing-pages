# Landing Pages

Monorepo con landing pages estáticas construidas en [Astro](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/).

Cada carpeta es un proyecto independiente, con su propio `package.json`, `src/` y `public/`. Se versionan juntos para simplificar el flujo Git/GitHub.

## Proyectos

| Proyecto | Descripción | Stack | Secciones |
| -------- | ----------- | ----- | --------- |
| `smile-care/` | Landing para clínica dental SmileCare. Enfoque en conversión: servicios, casos, testimonios y contacto. | Astro 7, Tailwind 4, GSAP, Lucide, Inter | Header, About, Services, Works, Consultations, Testimonials, Insights, Footer |
| `stroglow/` | Landing ecommerce para skincare. Enfoque en producto: beneficios, tienda, reseñas y FAQ. | Astro 5, Tailwind 4, Lucide | Header, Hero, Frase, Benefits, About, Store, Reviews, FAQ |

> Detalles técnicos por proyecto:
> - `smile-care/astro.config.mjs:9` define `site: https://www.smilecaredental.com` y alias `@` a `src/`.
> - `smile-care/src/data/site.ts:35` centraliza navegación, contenido y testimonios.
> - `stroglow/src/pages/index.astro:14` compone la página desde 8 componentes en `src/components/`.

## Estructura

```text
landing-pages/
├── README.md
├── .gitignore
├── smile-care/
│   ├── src/        # pages, layouts, components, data, scripts, styles
│   ├── public/     # favicon, og-image, robots.txt, sitemap.xml
│   ├── astro.config.mjs
│   └── package.json
└── stroglow/
    ├── src/
    ├── public/
    ├── astro.config.mjs
    └── package.json
```

## Requisitos

- Node.js >= 22.12.0
- npm o [bun](https://bun.sh/) (usa uno solo por proyecto para no mezclar lockfiles)

## Inicio rápido

```bash
# 1. Entra al proyecto que quieres editar
cd smile-care
# o
cd stroglow

# 2. Instala dependencias (solo la primera vez)
npm install
# o
bun install

# 3. Servidor de desarrollo
npm run dev
# abre http://localhost:4321

# 4. Build de producción
npm run build

# 5. Previsualizar el build
npm run preview
```

| Comando | Acción |
| :------ | :----- |
| `npm run dev` | Servidor local con hot-reload en `localhost:4321` |
| `npm run build` | Genera sitio estático en `dist/` |
| `npm run preview` | Sirve `dist/` para verificar antes de desplegar |
| `npx astro ...` | CLI de Astro (`add`, `check`, `--help`) |

## Añadir una nueva landing

1. Crea la carpeta con kebab-case desde la raíz:
   ```bash
   npm create astro@latest mi-nueva-landing
   cd mi-nueva-landing
   npm install
   ```
2. Verifica que arranque: `npm run dev`.
3. Súbela:
   ```bash
   cd ..
   git add mi-nueva-landing/
   git commit -m "feat: add mi-nueva-landing"
   git push
   ```

Convención de nombres: `nombre-cliente-o-tema/` en minúsculas y con guiones.

## Flujo Git / GitHub

```bash
# ver qué cambió
git status

# editar un solo proyecto
git add smile-care/
git commit -m "feat(smile-care): nueva sección de precios"

# o subir todo lo cambiado
git add .
git commit -m "feat: ajustes en smile-care y stroglow"

# subir a GitHub
git push

# traer cambios
git pull
```

Formato de commits: `feat(scope): descripción`, `fix(scope): descripción`, `docs: descripción`. Ej: `feat(stroglow): añade FAQ de envíos`.

## Notas

- `node_modules/`, `dist/` y `.astro/` están ignorados en `.gitignore` raíz y no se suben.
- No mezcles `package-lock.json` y `bun.lock` en el mismo proyecto. Si usas npm, borra `bun.lock` y viceversa.
- Assets grandes van en `public/` (favicons, og-image) y los optimizados/importados en `src/assets/`.
- SEO: cada proyecto define `title`, `description` y canonical en su `Layout` / `lib/seo.ts`.
