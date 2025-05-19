'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 类型定义
interface ProductItem {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface ProductCategory {
  category: string;
  items: ProductItem[];
}

interface ServiceAdvantage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// 常量数据
const PRODUCTS: ProductCategory[] = [
  {
    category: '智能解决方案',
    items: [
      {
        title: '智能工厂解决方案',
        description: '通过物联网和人工智能技术，实现工厂生产全流程的智能化管理',
        features: [
          '生产设备实时监控',
          '预测性维护',
          '生产计划优化',
          '质量控制自动化'
        ],
        image: '/images/product1.jpg'
      },
      {
        title: '智慧城市解决方案',
        description: '打造智能化城市管理系统，提升城市运营效率',
        features: [
          '交通管理智能化',
          '公共安全监控',
          '环境监测系统',
          '能源管理优化'
        ],
        image: '/images/product2.jpg'
      }
    ]
  },
  {
    category: '数据分析平台',
    items: [
      {
        title: '企业数据分析平台',
        description: '为企业提供全方位的数据分析解决方案',
        features: [
          '多源数据整合',
          '实时数据分析',
          '可视化报表',
          '智能决策支持'
        ],
        image: '/images/product3.jpg'
      }
    ]
  }
];

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
const PageHeader = () => (
  <div className="bg-blue-600 text-white py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center">产品与服务</h1>
      <p className="text-xl text-center mt-4">为您提供全方位的解决方案</p>
    </div>
  </div>
);

const ProductCard = ({ item }: { item: ProductItem }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <ul className="space-y-2">
        {item.features.map((feature, index) => (
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
);

const ProductSection = ({ category }: { category: ProductCategory }) => (
  <div className="mb-16">
    <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {category.items.map((item) => (
        <ProductCard key={item.title} item={item} />
      ))}
    </div>
  </div>
);

const ServiceAdvantageCard = ({ advantage }: { advantage: ServiceAdvantage }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="mb-4">{advantage.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
    <p className="text-gray-600">{advantage.description}</p>
  </div>
);

const ServiceAdvantagesSection = () => (
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
);

// 主页面组件
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageHeader />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          {PRODUCTS.map((category) => (
            <ProductSection key={category.category} category={category} />
          ))}
        </div>
      </section>

      <ServiceAdvantagesSection />
      <Footer />
    </div>
  );
} 