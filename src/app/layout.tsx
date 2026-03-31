import type { Metadata, Viewport } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import { SEO } from '@/constants/constants'
import { personSchema, organizationSchema } from '@/lib/schema'

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: SEO.SITE_TITLE,
  description: SEO.SITE_DESCRIPTION,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Web Development",
    "Mobile Development",
    "Portfolio",
    "Sri Lanka",
    "Sidath Rathnayake"
  ],
  authors: [{ name: "Sidath Rathnayake" }],
  creator: "Sidath Rathnayake",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidath-portfolio.vercel.app",
    siteName: "Sidath Rathnayake - Portfolio",
    title: SEO.SITE_TITLE,
    description: SEO.SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.SITE_TITLE,
    description: SEO.SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0e0f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#0a0e0f" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://sidath-portfolio.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${oswald.className} min-h-dvh bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
