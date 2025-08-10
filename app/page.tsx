'use client';

import { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // Product data remains the same
  const products = [
    { id: 1, name: "k-pop demon hunter's cat keychain", price: "₹129", image: "/1.png", category: "keychains" },
    { id: 2, name: "Satoru Gojo", price: "₹299", image: "/2.png", category: "keychains" },
    { id: 3, name: "3 cute pins", price: "₹99", image: "/3.png", category: "pins" },
    { id: 4, name: "angry pin", price: "₹99", image: "/4.png", category: "pins" },
    { id: 5, name: "classic heart", price: "₹69", image: "/heart.png", category: "earrings" },
    { id: 6, name: "bat cat", price: "₹59", image: "/cat.png", category: "earrings" },
    { id: 7, name: "forget me nots", price: "₹59", image: "/forgetmenots.png", category: "earrings" }
  ];

  const categories = ["All Products", "keychains", "pins", "earrings"];

  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    // Changed to <main> for better semantics and added a container for better spacing on larger screens
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Shop Header */}
        <header className="text-center py-10 border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-black">amithi.studio</h1>
        </header>

        {/* Filters and Product Grid Wrapper */}
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  // Slightly enhanced button styling for better feedback
                  className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
                    selectedCategory === category
                      ? 'bg-black text-white shadow'
                      : 'bg-gray-100 text-black border border-transparent hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid - UPDATED FOR RESPONSIVENESS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-6">
            {filteredProducts.map((product) => (
              // Added group class for hover effects and enhanced transitions
              <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Product Image */}
                <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300} // Increased size for better quality
                    height={300}
                    // Added a subtle zoom effect on hover
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Fallback can be handled via CSS or kept as is. This JS approach is fine. */}
                </div>
                
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;