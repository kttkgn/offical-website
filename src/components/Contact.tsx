'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-xl text-gray-600">期待与您沟通合作</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">北京市丰台区泥洼北路6号院9号楼203-354室</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:lxw@shandianguozi.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      lxw@shandianguozi.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">关注我们</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <a href="https://www.xiaohongshu.com/user/profile/67c3f34a000000000e01e003" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                      小红书
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-gray-600">微信公众号</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span className="font-medium">更多联系方式</span>
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
