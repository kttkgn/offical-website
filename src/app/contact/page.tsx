'use client';

import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:zlkpo@hotmail.com';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* 标题区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">联系我们</h1>
          <p className="text-xl text-center mt-4 text-blue-100">期待与您沟通交流</p>
        </div>
      </div>

      {/* 联系信息 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">联系方式</h2>
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">地址</p>
                      <p className="mt-1 text-gray-600 leading-relaxed">北京市丰台区泥洼北路6号院9号楼203-354室</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">邮箱</p>
                      <button 
                        onClick={handleEmailClick}
                        className="mt-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        zlkpo@hotmail.com
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">工作时间</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-gray-100 group">
                    <div className="flex items-center">
                      <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600">周一至周五</span>
                    </div>
                    <span className="text-gray-900 font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-gray-100 group">
                    <div className="flex items-center">
                      <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600">周六</span>
                    </div>
                    <span className="text-gray-900 font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex items-center justify-between py-4 group">
                    <div className="flex items-center">
                      <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600">周日</span>
                    </div>
                    <span className="text-gray-500 font-medium">休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 