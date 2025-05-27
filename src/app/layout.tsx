import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shandianguozi.com"),
  title: {
    default: "闪电果子（北京）科技有限公司 - 智能解决方案提供商",
    template: "%s | 闪电果子（北京）科技有限公司"
  },
  description: "闪电果子（北京）科技有限公司是一家专注于智能解决方案的高新技术企业，为企业提供全方位的智能化解决方案，提升运营效率。",
  keywords: ["智能解决方案", "数据分析", "企业服务", "闪电果子科技", "智能化转型"],
  authors: [{ name: "闪电果子（北京）科技有限公司" }],
  creator: "闪电果子（北京）科技有限公司",
  publisher: "闪电果子（北京）科技有限公司",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.shandianguozi.com",
    siteName: "闪电果子（北京）科技有限公司",
    title: "闪电果子（北京）科技有限公司 - 智能解决方案提供商",
    description: "闪电果子（北京）科技有限公司是一家专注于智能解决方案的高新技术企业，为企业提供全方位的智能化解决方案，提升运营效率。",
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
    title: "闪电果子（北京）科技有限公司 - 智能解决方案提供商",
    description: "闪电果子（北京）科技有限公司是一家专注于智能解决方案的高新技术企业，为企业提供全方位的智能化解决方案，提升运营效率。",
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
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
