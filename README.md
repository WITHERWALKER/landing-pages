# Landing Pages

Monorepo con proyectos de landing pages en [Astro](https://astro.build/).

## Proyectos

- `smile-care/` — Landing clínica dental (Astro 7 + Tailwind 4 + GSAP)
- `stroglow/` — Landing skincare ecommerce (Astro 5 + Tailwind 4)

## Requisitos

- Node.js >= 22.12.0
- npm o [bun](https://bun.sh/)

## Uso

Cada proyecto es independiente:

```bash
# entrar a un proyecto
cd smile-care
# o
cd stroglow

# instalar dependencias
npm install
# o
bun install

# desarrollo
npm run dev

# build
npm run build

# preview del build
npm run preview
```

## Añadir una nueva landing

```bash
# desde la raíz landing-pages/
# crea la carpeta del nuevo proyecto (ej. con astro)
npm create astro@latest mi-nueva-landing

# luego súbela:
git add mi-nueva-landing/
git commit -m "feat: add mi-nueva-landing"
git push
```

## Flujo Git

```bash
# ver estado
git status

# preparar cambios de un proyecto
git add smile-care/
# o todo
git add .

# guardar
git commit -m "feat(smile-care): descripción del cambio"

# subir a GitHub
git push
```

> `node_modules/`, `dist/` y `.astro/` están ignorados en `.gitignore` raíz, no se suben.
