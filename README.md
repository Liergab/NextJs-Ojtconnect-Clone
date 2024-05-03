# NextJS  OJTCONNECT-CLONE

- NextJS 14 - Typescript
- Tailwind 
- Shadcn , Aceternity
- Mongodb , Prisma

# File Stracture
- app 
    - (auth)
        - This page is for auth route example (login, sign-up, verify-account, reset-password)
    -  (root) 
        - (student/route) - only accessible for student
        - (company/route) - only accessible for company
        - (home/route) - landing page
    - api - For making api
- components 
    - ui - Reusable components coming from shadcn
    - modal - Different modal folder
    - provider - Different provider
    - sign-up - Different sign-up components
    - Login - Different Login components
    - other Navbar footer Modal 
- actions 
    - This folder is for server action
- data 
    - Reusable Logic that can be used for server action example (getUserById, By Email)
- types 
    - This folder is for zod types of form schema types.
- lib 
    - helper function
    - db connection
    - mail configuration
    - token generator
- auth 
    - Configuration of authjs callback, events, strategies,
- auth.config 
    - we import this in authj it contain the logic of saving the credentials in database
- middleware 
    - For route logic before we access the route or path the middleware will check if the user is cable or valid to go in specific route or path






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
