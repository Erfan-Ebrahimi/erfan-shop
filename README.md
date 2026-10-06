# Erfan Shop

React shopping app with a product catalog, product details and a Context API shopping cart, powered by Fake Store API.

<p dir="rtl">فروشگاه تمرینی با فهرست محصولات، جزئیات کالا و سبد خرید.</p>

[Deployment link](https://erfan-shop.vercel.app) · [Source](https://github.com/Erfan-Ebrahimi/erfan-shop)

## Stack

React · React Router · Context API · Axios · CSS Modules

## What's inside

- Product catalog and detail views
- Shopping cart state with React Context
- Product data fetched from Fake Store API
- Component styles with CSS Modules

## Local setup

```bash
git clone https://github.com/Erfan-Ebrahimi/erfan-shop.git
cd erfan-shop
npm ci
npm start
```

Create a production build with `npm run build`.

## Project layout

- `src/components/` — catalog, details and cart views
- `src/context/` — product and cart state
- `src/services/api.js` — Fake Store API client
- `src/helper/` — cart helpers

## Project notes

Product loading depends on `https://fakestoreapi.com`. This is a shopping UI demonstration and does not process real payments.

---

[Erfan Ebrahimi](https://github.com/Erfan-Ebrahimi)
