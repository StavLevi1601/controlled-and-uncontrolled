This repository contains an example project demonstrating the use of controlled and uncontrolled components in React. The project includes a form with two main inputs: an email and a telephone number.

Features:

Controlled Components: Utilizes controlled components for email input, including real-time validation using Zod schema.

Uncontrolled Components: Implements an uncontrolled component for telephone input, validated on form submission using a custom Zod validation schema.

Modal Feedback: Displays a modal window upon successful validation of the inputs, providing user feedback.

Implementation:
The email address is managed with React's useState, and validated in real-time.

The telephone number uses useRef for an uncontrolled component approach, with validation triggered on form submission.

On successful validation of both fields, a modal confirms the submission.

This example serves as a practical demonstration of how to manage form inputs with both controlled and uncontrolled approaches in React, integrating simple validation logic and user feedback.

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
# controlled-and-uncontrolled
