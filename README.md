# San Luxury — D2C Jewellery Storefront (Frontend)

Salesy, conversion-focused retail storefront for **San Luxury**. Built with
**Next.js 14 (App Router) + TypeScript + Tailwind**. This phase is the **complete
frontend** running on **mock data** — structured so Wix Headless (catalog/cart/
checkout/members) and Razorpay wiring drop in later without a rewrite.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified passing)
```

## What's built (this phase)

- **Home** — announcement marquee, editorial hero, trust bar, signature
  collections, bestsellers, welcome-offer promo, gifting section, new arrivals,
  brand story, testimonials, newsletter.
- **Shop** (`/products`) — category pills, price filters, sort, responsive grid,
  quick-add. Reads `?category=` / `?sort=` from the URL.
- **Product detail** (`/products/[slug]`) — gallery, options, quantity, add-to-cart
  / buy-now, trust points, rich description, review distribution, related products,
  Product JSON-LD.
- **Cart** — slide-in drawer + full `/cart` page, free-shipping progress, coupons
  (`SHINE10`, `LUXE500`), quantities.
- **Checkout** (`/checkout`) — contact + address form, prepaid/COD, live order
  summary. Currently **simulates** order placement → `/success`.
- **Success**, **About**, **Contact** (with form), **Account** (login stub),
  **Wishlist**, and policy pages (shipping / exchange / privacy / terms).
- **SEO** — per-route metadata, `sitemap.xml`, `robots.txt`, Organization + Product
  JSON-LD. Fully responsive with a mobile bottom nav.

## Brand system

- Palette derived from the logo → `tailwind.config.ts` (signature gold `#C6A15B`,
  warm cream grounds, emerald/maroon jewel accents).
- Fonts: Cormorant Garamond (display), Marcellus (accents), Jost (body).
- Contact/brand details live in **one file**: `src/lib/site.ts`.

## Mock data & images

- Catalog: `src/data/products.ts` (24 products seeded from San Luxury's real range).
- Products with no photo render an **elegant gold SVG placeholder**
  (`ProductPlaceholder`). To use real photos: drop them in `/public/products/` and
  list the paths in each product's `images: []`.
- Real logo is at `/public/logo.png`.

## Where the backend wires in later (`TODO` markers in code)

| Area | File / marker |
|---|---|
| Catalog read | `src/data/products.ts` selectors → Wix `queryProducts()` |
| Cart | `src/hooks/useCartStore.ts` → Wix `currentCart` SDK |
| Checkout → payment | `src/components/CheckoutView.tsx` → `/api/razorpay` + verify |
| Members/auth | `src/app/account/page.tsx` → `@wix/members` |
| Newsletter | `src/components/NewsletterForm.tsx` → `/api/subscribe` |
| Contact form | `src/components/ContactForm.tsx` → `/api/contact` |
| Purchase analytics | `src/components/SuccessView.tsx` → GA4 + Meta CAPI |

Follow `../SAN-LUXURY-STOREFRONT-HANDOFF.md` for the full backend architecture.

## Still pending from client

- Real product photos, descriptions, exact prices/stock.
- Confirmed contact email, business address, social handles (placeholders in
  `src/lib/site.ts`, marked `TODO(client)`).
- Legally-approved policy copy (current text is placeholder).
