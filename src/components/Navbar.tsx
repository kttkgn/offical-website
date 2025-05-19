'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">闪电果子（北京）科技有限公司</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">首页</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">关于我们</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">产品服务</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">联系我们</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label={isOpen ? "关闭菜单" : "打开菜单"}
              type="button"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">首页</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">关于我们</Link>
            <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">产品服务</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">联系我们</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 