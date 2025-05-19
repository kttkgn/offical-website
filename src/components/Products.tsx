const Products = () => {
  const products = [
    {
      title: '智能解决方案',
      description: '为企业提供全方位的智能化解决方案，提升运营效率',
      image: '/images/product1.jpg',
    },
    {
      title: '数据分析平台',
      description: '强大的数据分析能力，助力企业做出明智决策',
      image: '/images/product2.jpg',
    },
    {
      title: '云服务',
      description: '安全可靠的云服务，满足企业多样化需求',
      image: '/images/product3.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 mb-4 shadow-sm tracking-wide inline-block ml-2">产品服务</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            创新产品，优质服务
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-0">
            我们提供全方位的产品和服务，满足客户多样化需求
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 