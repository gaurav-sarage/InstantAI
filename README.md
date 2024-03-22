<h1 align="center"> **Warnings below** </h1>

⚠️:  **Important:** The payment gateway is still a WIP because Stripe does not allow payments from India in test mode.

⚠️: Unable to add upload Image on production using Cloudinary. Will fix the error soon.
<br> <br>

## 📌 Overview

InstantAI is an AI Powered Image Generator App under development. It leverages various libraries/tools like Clerk/Next.js, Cloudinary, React, Stripe, MongoDB, TailwindCSS, TypeScript, and more for seamless functionality.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .eslintrc.json
├── .gitignore
├── README.md
├── app
│   ├── (auth)
│   │   ├── layout.tsx
│   │   ├── sign-in
│   │   │   └── [[...sign-in]]
│   │   │       └── page.tsx
│   │   └── sign-up
│   │       └── [[...sign-up]]
│   │           └── page.tsx
│   ├── (root)
│   │   ├── credits
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── profile
│   │   │   └── page.tsx
│   │   └── transformations
│   │       ├── [id]
│   │       │   ├── page.tsx
│   │       │   └── update
│   │       │       └── page.tsx
│   │       └── add
│   │           └── [type]
│   │               └── page.tsx
│   ├── api
│   │   └── webhooks
│   │       ├── clerk
│   │       │   └── route.ts
│   │       └── stripe
│   │           └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components.json
├── components
│   ├── shared
│   │   ├── Checkout.tsx
│   │   ├── Collection.tsx
│   │   ├── CustomField.tsx
│   │   ├── DeleteConfirmation.tsx
│   │   ├── Header.tsx
│   │   ├── InsufficientCreditsModal.tsx
│   │   ├── MediaUploader.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Search.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TransformationForm.tsx
│   │   └── TransformedImage.tsx
│   └── ui
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── pagination.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── use-toast.ts
├── constants
│   └── index.ts
├── lib
│   ├── actions
│   │   ├── image.actions.ts
│   │   ├── transaction.action.ts
│   │   └── user.actions.ts
│   ├── database
│   │   ├── db.ts
│   │   ├── models
│   │   │   ├── image.model.ts
│   │   │   ├── transaction.model.ts
│   │   │   └── user.model.ts
│   │   └── mongoose.ts
│   └── utils.ts
├── middleware.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── assets
│   │   ├── icons
│   │   │   ├── add.svg
│   │   │   ├── bag.svg
│   │   │   ├── camera.svg
│   │   │   ├── caret-down.svg
│   │   │   ├── check.svg
│   │   │   ├── close.svg
│   │   │   ├── coins.svg
│   │   │   ├── credit-coins.svg
│   │   │   ├── cross.svg
│   │   │   ├── download.svg
│   │   │   ├── filter.svg
│   │   │   ├── free-plan.svg
│   │   │   ├── home.svg
│   │   │   ├── image.svg
│   │   │   ├── menu.svg
│   │   │   ├── photo.svg
│   │   │   ├── profile.svg
│   │   │   ├── scan.svg
│   │   │   ├── search.svg
│   │   │   ├── spinner.svg
│   │   │   └── stars.svg
│   │   └── images
│   │       ├── banner-bg.jpg
│   │       ├── coins.jpg
│   │       ├── gradient-bg.svg
│   │       ├── logo-icon.svg
│   │       └── logo-text.svg
│   ├── favicon.ico
│   ├── logo-icon.png
│   ├── logo.png
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
├── tsconfig.json
└── types
    └── index.d.ts
```

## 📝 Project Summary

- [**app**](app): Core application logic and structure.
- [**components**](components): Reusable UI components.
- [**lib**](lib): Library for actions and database models.
- [**public**](public): Publicly accessible assets.
- [**constants**](constants): Constants and configurations.
- [**types**](types): Type definitions.
- [**app/(auth)**](app/(auth)): Authentication-related functionality.
- [**app/(root)**](app/(root)): Root-level application features.
- [**app/api**](app/api): API endpoints.
- [**public/assets**](public/assets): Image and icon assets.

## 💻 Stack

- [react-hook-form](https://github.com/react-hook-form/react-hook-form): Simplifies form management and validation.
- [mongoose](https://mongoosejs.com/): Facilitates MongoDB data modeling and interaction.
- [next](https://nextjs.org/): Framework for server-rendered React applications.
- [stripe](https://stripe.com/docs): Enables payment processing integration.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for styling.
- [typescript](https://www.typescriptlang.org/): Adds static typing to JavaScript for enhanced development.

## ⚙️ Setting Up

#### Your Environment Variable

- Step 1

- Step 2

## 🚀 Run Locally
1.Clone the InstantAI repository:
```sh
git clone https://github.com/gaurav-sarage/InstantAI
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
bun install
npm install
yarn install
```
3.Start the development mode:
```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors
<a href="https://github.com/gaurav-sarage/InstantAI/graphs/contributors">
<img src="https://contrib.rocks/image?repo=gaurav-sarage/InstantAI" />
</a>

## ☁️ Live Link

[InstantAI](https://instantai.vercel.app/)
