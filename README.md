# Premium Digital Book Store

A premium, modern Next.js 15 application built with Tailwind CSS v4 and TypeScript.
This project acts as a digital bookstore with a manual checkout process (no payment gateways).

## Features
- 📚 Product Listing & Details pages
- 🛒 Custom Checkout Flow (collects details, emails instructions)
- 📧 Automated Email Notifications (via Nodemailer)
- 🎨 Premium Design System (Glassmorphism, dark mode, smooth gradients)
- 📱 Fully Responsive

## Getting Started

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the `.env.local.example` to `.env.local` and fill in your SMTP credentials.
   ```bash
   cp .env.local.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Configuration

Products can be managed in `lib/products.ts`. You can add new books, change pricing, and update descriptions here.
Cover images should be placed in `public/images/`.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- Lucide React (Icons)
- Nodemailer (Emails)
