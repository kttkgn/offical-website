'use client';

import Link from 'next/link';

export default function About() {
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