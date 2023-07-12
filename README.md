# react-products-demo

A simple dashboard that fetches a product, displays it, and allows you to edit it

![React Badge](https://img.shields.io/badge/Framework-React-informational?style=flat&logo=react&logoColor=white&color=blue)
![TypeScript Badge](https://img.shields.io/badge/Lang-TypeScript-informational?style=flat&logo=typescript&logoColor=white&color=blue)
![Tailwind Badge](https://img.shields.io/badge/Framework-TailWind-informational?style=flat&logo=tailwindcss&logoColor=white&color=lightblue)
<!-- ![Vite Badge](https://img.shields.io/badge/Dev-Vite-informational?style=flat&logo=vite&logoColor=white&color=orange)
![Project Duration Badge](https://img.shields.io/badge/duration-1%20week-black) -->

## Live Demo

[Link](https://react-dashboard-products.vercel.app/)

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
