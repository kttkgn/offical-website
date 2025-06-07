import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shandianguozi.com"),
  title: {
    default: "闪电果子（北京）科技有限公司 - 视觉内容创作、开发外包",
    template: "%s | 闪电果子（北京）科技有限公司"
  },
  description: "闪电果子（北京）科技有限公司是一家专注于视觉内容创作和开发外包的高新技术企业。提供视频制作、软件开发等全方位服务。",
  keywords: [
    "闪电果子科技",
    "闪电果子北京",
    "闪电果子",
    "闪电",
    "果子",
    "北京闪电果子",
    "北京闪电",
    "北京果子",
    "视觉内容创作",
    "视频制作",
    "开发外包",
    "软件开发",
    "北京科技公司",
    "北京软件开发",
    "北京视频制作",
    "北京科技企业",
    "北京高新技术企业",
    "北京互联网公司",
    "北京IT公司",
    "北京技术外包"
  ],
  authors: [{ name: "闪电果子（北京）科技有限公司" }],
  creator: "闪电果子（北京）科技有限公司",
  publisher: "闪电果子（北京）科技有限公司",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.shandianguozi.com",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.shandianguozi.com",
    siteName: "闪电果子（北京）科技有限公司",
    title: "闪电果子（北京）科技有限公司 - 视觉内容创作、开发外包",
    description: "闪电果子（北京）科技有限公司是一家专注于视觉内容创作和开发外包的高新技术企业。提供视频制作、软件开发等全方位服务。",
    images: [
      {
        url: "https://www.shandianguozi.com/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "闪电果子（北京）科技有限公司",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "闪电果子（北京）科技有限公司 - 视觉内容创作、开发外包",
    description: "闪电果子（北京）科技有限公司是一家专注于视觉内容创作和开发外包的高新技术企业。提供视频制作、软件开发等全方位服务。",
    images: ["https://www.shandianguozi.com/images/og-image.svg"],
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
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="baidu-site-verification" content="your-baidu-site-verification" />
        <meta name="360-site-verification" content="your-360-site-verification" />
        <meta name="sogou-site-verification" content="your-sogou-site-verification" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "闪电果子（北京）科技有限公司",
              "url": "https://www.shandianguozi.com",
              "logo": "https://www.shandianguozi.com/images/og-image.svg",
              "description": "闪电果子（北京）科技有限公司是一家专注于AI智能服务、视觉内容创作和开发外包的高新技术企业。",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "北京",
                "addressCountry": "CN"
              },
              "sameAs": [
                "https://www.shandianguozi.com"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
