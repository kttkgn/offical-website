const Products = () => {
  const products = [
    {
      title: '智能解决方案',
      description: '为企业提供全方位的智能化解决方案，提升运营效率',
      image: '/images/smart-solution.jpg',
      link: '/products#智能解决方案'
    },
    {
      title: '数据分析平台',
      description: '强大的数据分析能力，助力企业做出明智决策',
      image: '/images/data-analysis.jpg',
      link: '/products#数据分析平台'
    },
    {
      title: '服务优势',
      description: '专业团队，优质服务，安全可靠，持续创新',
      image: '/images/service-advantage.jpg',
      link: '/products#service-advantages'
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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.title}
              href={product.link}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products; 