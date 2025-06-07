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
    description: '拥有丰富的行业经验和专业知识，团队成员均来自知名企业',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: '优质服务',
    description: '提供7*24小时技术支持，确保项目顺利交付和稳定运行',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: '安全可靠',
    description: '采用行业领先的安全技术，保障数据安全和系统稳定',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: '持续创新',
    description: '持续关注行业动态，不断优化服务流程，提升服务质量',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

// 组件
const ServiceAdvantageCard = ({ advantage }: { advantage: ServiceAdvantage }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          <div className="space-y-24 max-w-5xl mx-auto">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="scroll-mt-20">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                  <div className="relative w-full md:w-96 h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 group">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-900 font-medium">{feature}</p>
                            <p className="text-gray-500 text-sm mt-1">
                              {getFeatureDescription(product.id, feature)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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

// 获取特性详细描述
function getFeatureDescription(productId: string, feature: string): string {
  const descriptions: Record<string, Record<string, string>> = {
    visual: {
      '创意策划与脚本撰写': '根据品牌调性和目标受众，制定创意策略和内容规划',
      '商业摄影服务': '提供专业的产品、人像、活动等商业摄影服务',
      '视频拍摄制作': '从前期策划到后期制作的全流程视频服务',
      '影视后期剪辑与调色': '专业的视频剪辑、调色和特效制作',
      '画面包装与字幕设计': '为视频添加精美的包装和字幕效果',
      '内容发布支持与优化': '提供内容发布策略和平台优化建议'
    },
    dev: {
      '网站开发': '响应式网站、企业官网、电商平台等开发服务',
      '移动应用开发': 'iOS、Android 原生应用和跨平台应用开发',
      '系统集成': '企业级系统集成和定制化开发服务',
      '技术咨询': '提供专业的技术选型和架构设计建议',
      '运维服务': '7*24小时系统运维和技术支持服务',
      '定制化开发': '根据企业需求提供定制化的软件开发服务'
    }
  };

  return descriptions[productId]?.[feature] || '';
} 