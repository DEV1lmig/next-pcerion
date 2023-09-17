This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install the dependencies
**Please use pnpm, its faster and save disk space for your projects**
by using a unique installation of each dependencies, pnpm saves cache and links that cache to the node module folder
for every project, so it only uses one installation of the module(s) for the projects that its needed.

Install pnpm:

- On Windows using powershell, exec this command `iwr https://get.pnpm.io/install.ps1 -useb | iex`
  You can also use corepack if you are using a node version v16.13 or greater.

```
corepack enable
corepack prepare pnpm@latest --activate or pnpm@<version> if you are using a node version below v16.17.
```

Install dependencies:

- Exec `pnpm install` and it will install everything for you

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
