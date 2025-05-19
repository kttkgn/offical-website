'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            智能科技解决方案
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            为企业提供全方位的智能化解决方案，助力企业数字化转型
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              了解产品
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 