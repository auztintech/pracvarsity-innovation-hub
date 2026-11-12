# Pracvarsity

Co-working and practical learning hub website. Built with Next.js, TypeScript, Tailwind v4, shadcn-style UI (Radix), Motion, Formik and Yup.

```bash
npm install
npm run dev
```

## Images

Copy these from the live site (`/static/assets/` and `/static/assets/img/logo/`) into `public/images/`:

| File | Used in |
| --- | --- |
| `logo.png`, `logo-light.png` | Header / footer (a text logo shows until they are added) |
| `prac11.jpeg` | Hero |
| `prac9.jpeg`, `prac7.jpeg`, `prac5.jpeg`, `prac3.jpeg`, `prac1.jpeg`, `prac8.jpeg` | About, Why, Reviews, Spaces, Programs |
| `avatar-1.jpg` … `avatar-3.jpg` | Member avatars in the About section |

Until then every image falls back to a blue gradient, so the layout still holds.

## Where things live

- Content (spaces, plans, programs, testimonials, FAQs, contact): `src/data/home.ts`
- Brand colours: `src/app/globals.css` (`--primary`)
- Scroll animations: `src/components/motion/reveal.tsx`
- Icons: `src/components/icons/pack.tsx`
- API endpoints: `src/config/endpoints.ts` (set `NEXT_PUBLIC_API_URL` to send bookings to the backend)
