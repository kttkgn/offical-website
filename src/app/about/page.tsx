'use client';

import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* 标题区域 */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">关于我们</h1>
          <p className="text-xl text-center text-blue-100">了解我们的故事与使命</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 公司简介 */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-12 h-1 bg-blue-500 rounded-full mr-4"></span>
              公司简介
            </h2>
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
          </section>

          {/* 使命 */}
          <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-12 h-1 bg-blue-500 rounded-full mr-4"></span>
              我们的使命
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              以科技创新为驱动，为企业提供智能化解决方案，助力企业实现数字化转型，推动产业升级。
            </p>
          </section>

          {/* 愿景 */}
          <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-12 h-1 bg-blue-500 rounded-full mr-4"></span>
              我们的愿景
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              成为智能科技领域的引领者，打造行业领先的智能化解决方案，让科技创新赋能企业发展，创造更美好的未来。
            </p>
          </section>

          {/* 价值观 */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-12 h-1 bg-blue-500 rounded-full mr-4"></span>
              核心价值观
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">创新</h3>
                <p className="text-gray-600">持续探索新技术，推动行业发展</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">专业</h3>
                <p className="text-gray-600">以专业的态度，提供优质服务</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">诚信</h3>
                <p className="text-gray-600">诚信为本，赢得客户信任</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 