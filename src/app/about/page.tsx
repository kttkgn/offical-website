'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* 标题区域 */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">关于我们</h1>
          <p className="text-xl text-center mt-4">了解我们的故事与使命</p>
        </div>
      </div>

      {/* 公司简介 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">公司简介</h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                我们是一家专注于科技创新的企业，致力于为客户提供最优质的产品和服务。自成立以来，我们始终坚持&quot;创新、专业、诚信&quot;的核心价值观，通过持续的技术创新和优质服务，为客户创造更大的价值。
              </p>
              <p className="text-gray-600 leading-relaxed mt-6">
                我们的团队由行业精英组成，拥有丰富的经验和专业知识。我们不断探索新技术、新方法，为客户提供全方位的解决方案，帮助客户实现业务目标。
              </p>
              <p className="text-gray-600 leading-relaxed mt-6">
                未来，我们将继续秉持创新精神，不断提升产品和服务质量，为客户创造更大的价值，推动行业发展。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 