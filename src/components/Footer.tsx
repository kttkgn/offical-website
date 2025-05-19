'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">关于我们</h3>
            <p className="text-gray-400 leading-relaxed">
              闪点果子致力于为企业提供创新的技术解决方案，助力企业数字化转型。
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block"
                >
                  产品服务
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block"
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">北京市丰台区泥洼北路6号院9号楼203-354室</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:lxw@shandianguozi.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  lxw@shandianguozi.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} 闪点果子. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
} 