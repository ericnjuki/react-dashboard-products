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
cp .env.example .env // add your Google Maps API Key for Maps to work
nvm use 16 // if you have nvm
npm i // must use node v16
npm run dev // dev server
npm run lint // eslint + prettier
npm run build // deploy the /dist folder; Or just use Vercel ;)
```

## **Features**

### _A Main (/) route_

Has one component

- Home

<br>

### _Product View (/product)_

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

### _Product Edit (/product/edit)_

Allows you to edit:

- Product Name
- Product Image
- Product Description
- Youtube Video URL
- Product tags

<br>

### _White-Labeling Feature_

Allows you to save an APP_ID to your .env.

This id is used to make requests to a config API (`/configuration/:appId/`)

To retrieve various configs like color etc.

<br>

### _Responsive Design_

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
