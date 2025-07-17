
import { useState } from 'react';
import { ShoppingCart, Heart, Star, Filter, Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
  featured: boolean;
}

const MerchSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const categories = ['All', 'Apparel', 'Tech', 'Accessories', 'Collectibles'];

  const products: Product[] = [
    {
      id: 1,
      name: "BITS Official Hoodie",
      price: 129.99,
      image: "/placeholder.svg",
      category: "Apparel",
      rating: 4.9,
      reviews: 210,
      description: "Premium quality hoodie with BITS Pilani Dubai branding. Comfortable, stylish, and perfect for chilly lecture halls.",
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "BITS Tote Bag",
      price: 39.99,
      image: "/placeholder.svg",
      category: "Accessories",
      rating: 4.7,
      reviews: 98,
      description: "Eco-friendly tote bag featuring the BITS logo. Ideal for books, groceries, or a day on campus.",
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: "BITS Classic T-Shirt",
      price: 59.99,
      image: "/placeholder.svg",
      category: "Apparel",
      rating: 4.8,
      reviews: 150,
      description: "Soft cotton t-shirt with a minimalist BITS Pilani Dubai print. A must-have for every student.",
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: "BITS Stainless Steel Water Bottle",
      price: 49.99,
      image: "/placeholder.svg",
      category: "Accessories",
      rating: 4.6,
      reviews: 75,
      description: "Stay hydrated in style with this durable, leak-proof water bottle featuring the BITS crest.",
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: "BITS Laptop Sleeve",
      price: 69.99,
      image: "/placeholder.svg",
      category: "Tech",
      rating: 4.7,
      reviews: 60,
      description: "Protect your laptop with this padded sleeve, branded with the BITS Pilani Dubai logo.",
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: "BITS Enamel Pin Set",
      price: 24.99,
      image: "/placeholder.svg",
      category: "Collectibles",
      rating: 4.9,
      reviews: 40,
      description: "A set of stylish enamel pins representing BITS spirit. Perfect for bags, jackets, or gifting.",
      inStock: true,
      featured: false
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
    // Add some visual feedback here
  };

  return (
    <section id="merch" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">
            DIGITAL_MARKETPLACE.EXE
          </h2>
          <p className="text-xl text-secondary font-matrix max-w-2xl mx-auto">
            Gear up with cutting-edge merchandise designed for the digital generation
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-cyber uppercase tracking-wider transition-all duration-300 interactive ${
                  selectedCategory === category
                    ? 'bg-cyber-blue text-cyber-dark border border-cyber-blue'
                    : 'border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-blue/50 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-cyber-gray/50 border border-cyber-blue/30 text-cyber-blue pl-10 pr-4 py-2 rounded focus:outline-none focus:border-cyber-blue font-matrix"
              />
            </div>
            <button className="interactive p-2 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="cyber-card group cursor-pointer interactive"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-cyber-pink text-cyber-dark px-3 py-1 rounded font-cyber text-xs font-bold">
                    FEATURED
                  </div>
                )}
                
                {!product.inStock && (
                  <div className="absolute inset-0 bg-cyber-dark/80 flex items-center justify-center">
                    <span className="text-cyber-blue font-cyber font-bold text-lg">OUT OF STOCK</span>
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 interactive ${
                    favorites.includes(product.id)
                      ? 'bg-cyber-pink text-cyber-dark'
                      : 'bg-cyber-dark/80 text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark'
                  }`}
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-cyber-blue/70 font-matrix uppercase">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-cyber-pink fill-current" />
                    <span className="text-sm text-cyber-blue/70">{product.rating}</span>
                    <span className="text-xs text-cyber-blue/50">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-cyber font-bold text-cyber-blue mb-2 group-hover:text-cyber-pink transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-cyber-blue/60 font-matrix mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-cyber font-bold text-cyber-blue">
                      AED {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-cyber-blue/50 line-through">
                        AED {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.inStock) addToCart(product.id);
                    }}
                    disabled={!product.inStock}
                    className={`p-2 rounded transition-all duration-300 interactive ${
                      product.inStock
                        ? 'bg-cyber-blue text-cyber-dark hover:bg-cyber-pink'
                        : 'bg-cyber-gray/50 text-cyber-blue/30 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-cyber-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="cyber-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                <div className="relative">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 bg-cyber-dark/80 text-cyber-blue hover:text-cyber-pink p-2 rounded interactive"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyber-blue/70 font-matrix uppercase">
                        {selectedProduct.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-cyber-pink fill-current" />
                        <span className="text-sm text-cyber-blue/70">{selectedProduct.rating}</span>
                        <span className="text-xs text-cyber-blue/50">({selectedProduct.reviews} reviews)</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-cyber font-bold text-cyber-blue">
                      {selectedProduct.name}
                    </h2>
                  </div>

                  <p className="text-cyber-blue/80 font-matrix">
                    {selectedProduct.description}
                  </p>

                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-cyber font-bold text-cyber-blue">
                      AED {selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-lg text-cyber-blue/50 line-through">
                        AED {selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        if (selectedProduct.inStock) addToCart(selectedProduct.id);
                      }}
                      disabled={!selectedProduct.inStock}
                      className={`cyber-button flex-1 interactive ${
                        !selectedProduct.inStock ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {selectedProduct.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                    </button>
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className={`cyber-button cyber-button-pink interactive ${
                        favorites.includes(selectedProduct.id) ? 'bg-cyber-pink text-cyber-dark' : ''
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MerchSection;
