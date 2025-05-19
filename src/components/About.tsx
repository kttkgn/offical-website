'use client';

import Link from 'next/link';

export default function About() {
  const features = [
    {
      title: '创新技术',
      description: '持续投入研发，保持技术领先优势',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: '专业团队',
      description: '拥有行业顶尖的专业人才团队',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: '优质服务',
      description: '为客户提供全方位的优质服务支持',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h2>
            <p className="text-xl text-gray-600">以科技创新为驱动，助力企业数字化转型</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                我们是一家专注于科技创新的企业，致力于为客户提供最优质的产品和服务。自成立以来，我们始终坚持&quot;创新、专业、诚信&quot;的核心价值观，通过持续的技术创新和优质服务，为客户创造更大的价值。
              </p>
              <p className="text-gray-600 leading-relaxed mt-6">
                我们的团队由行业精英组成，拥有丰富的经验和专业知识。我们不断探索新技术、新方法，为客户提供全方位的解决方案，帮助客户实现业务目标。
              </p>
            </div>

            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span className="font-medium">了解更多</span>
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 