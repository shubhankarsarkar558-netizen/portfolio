import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/JsonLTD";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhankar.ucoder.in/"),

  title: {
    default: "Shubhankar Sarkar | AI & Machine Learning Engineer",
    template: "%s | Shubhankar Sarkar",
  },

  description:
    "Shubhankar Sarkar - AI & Machine Learning Engineer specializing in Data Analytics, Deep Learning, Python and predictive AI systems.",
  

  keywords: [
    "Shubhankar Sarkar",
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Analyst",
    "Artificial Intelligence",

    "Machine Learning Kolkata",
    "AI Engineer India",
    "Data Analyst West Bengal",

    "Python Developer",
    "TensorFlow Developer",
    "Scikit-learn",
    "Deep Learning",
    "Data Science",
    "Data Analytics",
    "Neural Networks",
    "Pandas",
    "NumPy",
    "SQL",
    "MongoDB",

    "Freelance AI Developer",
    "Predictive Analytics",
    "AI Solutions",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Shubhankar Sarkar",
      url: "https://shubhankar.ucoder.in/",
    },
  ],

  creator: "Shubhankar Sarkar",
  publisher: "Shubhankar Sarkar",

  category: "Technology",
  classification: "AI & Machine Learning Portfolio",

  verification: {
    google: "GArOY7tMKgk4llUNYhrSpNqVX6ZxA4lc8KHbXVavo4A",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://shubhankar.ucoder.in/",
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],

    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Shubhankar Sarkar | AI & Machine Learning Engineer",

    description:
      "Building intelligent systems using AI, Machine Learning and Data Analytics.",

    url: "https://shubhankar.ucoder.in/",

    siteName: "Shubhankar Sarkar Portfolio",

    images: [
      {
url:"https://shubhankar.ucoder.in/me.png",  
      width: 1200,
        height: 630,
        alt: "Shubhankar Sarkar - AI & Machine Learning Portfolio",
        type: "image/jpeg",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shubhankar Sarkar | AI & Machine Learning Engineer",

    description:
      "AI, Machine Learning and Data Analytics portfolio showcasing intelligent systems and predictive models.",

    images: [
      "https://shubhankar.ucoder.in/me.png"
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <StructuredData />
      </head>

      <body
        className={`${inter.className} antialiased selection:bg-purple-500/30 selection:text-purple-600 dark:selection:text-purple-400`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}