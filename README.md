# react-products-demo

## Live Demo

[Link](https://react-dashboard-products.vercel.app/)

**What is this?**

- A simple dashboard that fetches a product, displays it, and allows you to edit it

**What’s up with the weird design dude?**

- Inspired by this [good-looking bold design](https://designyourlife.com.au/)!

**How to run locally?**

```jsx
git clone
nvm use 16 // if you have nvm
npm i // must use node v16
npm run dev // dev server
npm run lint // eslint + prettier
npm run build // deploy /dist folder; Or just use Vercel + github repo;
```

## **Features**
### *A Main (/) route*

Has one component

- Home

<br>

### *Product View (/product)*
Hase multiple sections:

- Main Section
    - Image
    - Title
    - Type
    - Description
- Details Section
    - Technologies/Categories
    - Business Models
    - [TRL](https://en.wikipedia.org/wiki/Technology_readiness_level)
    - Investment Effort / Cost
- Video (embedded Youtube video)
- User Info Section:
    - Image
    - Name
    - Company Name
- Google Map to display company address of the product

<br>

### *Product Edit (/product/edit)*

Allows you to edit:

- Product Name
- Product Image
- Product Description
- Youtube Video URL
- Product tags

<br> 

### *White-Labeling Feature*

Allows you to save an APP_ID to your .env.

This id is used to make requests to a config API (`/configuration/:appId/`)

To retrieve various configs like color etc.

<br>

### *Responsive Design*

Mobile-first!

<br>

### **Tech Stack**

- React.js
- TypeScript
- Redux
- Tailwind CSS
- ES Lint
- Prettier
- Vite