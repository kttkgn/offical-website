'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import products from '@/data/productsData';
import Image from 'next/image';

// 类型定义
interface ServiceAdvantage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// 常量数据
const SERVICE_ADVANTAGES: ServiceAdvantage[] = [
  {
    title: '专业团队',
    description: '拥有丰富的行业经验和专业知识',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: '优质服务',
    description: '提供全方位的技术支持和售后服务',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: '安全可靠',
    description: '采用先进的安全技术，保障数据安全',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: '持续创新',
    description: '不断研发创新，提供领先的技术服务',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

// 组件
const ServiceAdvantageCard = ({ advantage }: { advantage: ServiceAdvantage }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="mb-4">{advantage.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
    <p className="text-gray-600">{advantage.description}</p>
  </div>
);

// 主页面组件
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">产品与服务</h1>
          <p className="text-xl text-center mt-4">为您提供全方位的解决方案</p>
        </div>
      </div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-5xl mx-auto">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="relative w-full md:w-72 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">我们的服务优势</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_ADVANTAGES.map((advantage) => (
              <ServiceAdvantageCard key={advantage.title} advantage={advantage} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 