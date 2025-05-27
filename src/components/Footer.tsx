'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 公司信息 */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent whitespace-nowrap overflow-visible">
              闪电果子（北京）科技有限公司
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                专注于智能解决方案的高新技术企业
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                我们致力于为企业提供智能化、数字化的解决方案，通过技术创新推动产业升级，助力企业实现数字化转型。
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                以客户需求为中心，以技术创新为驱动，打造专业、可靠、高效的智能服务。
              </p>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-100">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  首页
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  关于我们
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  产品服务
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-100">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 leading-relaxed break-words">北京市丰台区泥洼北路6号院9号楼203-354室</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:lxw@shandianguozi.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 break-all">
                  lxw@shandianguozi.com
                </a>
              </li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-gray-100">关注我们</h3>
            <div className="space-y-4">
              <a
                href="https://www.xiaohongshu.com/user/profile/67c3f34a000000000e01e003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.02.06.03.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                </svg>
                <span>小红书</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <svg className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 6.078 0 10.875c0 2.752 1.34 5.19 3.4 6.69l-1.05 3.15c-.1.3.1.6.4.6.1 0 .2 0 .3-.1l3.9-2.1c1.1.3 2.2.5 3.4.5 4.8 0 8.7-3.89 8.7-8.69 0-4.8-3.9-8.69-8.7-8.69zm4.5 11.69c-.2.2-.5.2-.7 0l-2.1-2.1-2.1 2.1c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l2.1-2.1-2.1-2.1c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l2.1 2.1 2.1-2.1c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-2.1 2.1 2.1 2.1c.2.2.2.5 0 .7z"/>
                </svg>
                <span className="break-words">微信公众号：闪电果子科技</span>
              </div>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © {new Date().getFullYear()} 闪电果子（北京）科技有限公司. 保留所有权利.
          </p>
          <p className="text-gray-400 mt-2">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
              京ICP备2025127308号
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 