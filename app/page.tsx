'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = [
    { id: 1, name: "k-pop demon hunter's cat", price: "₹119", image: "/1.png", category: "keychains" },
    { id: 2, name: "Satoru Gojo", price: "₹249", image: "/2.png", category: "keychains" },
    { id: 3, name: "3 cute pins", price: "₹99", image: "/3.png", category: "pins" },
    { id: 4, name: "angry pin", price: "₹79", image: "/4.png", category: "pins" },
    { id: 5, name: "classic heart", price: "₹69", image: "/heart.png", category: "earrings" },
    { id: 6, name: "bat cat", price: "₹59", image: "/cat.png", category: "earrings" },
    { id: 7, name: "forget me nots", price: "₹59", image: "/forgetmenots.png", category: "earrings" }
  ];

  const categories = ["All Products", "keychains", "pins", "earrings"];

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter(product => product.category === selectedCategory);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <div className="max-w-md mx-auto">
        {/* Shop name */}
        <header className="text-center py-6">
          <Image
            src="/pink_logo.png"
            alt="amithi.studio Logo"
            width={200}
            height={80}
            className="mx-auto h-16 w-auto"
            priority
          />
        </header>

        {/* Category buttons */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden rounded-lg cursor-pointer" onClick={() => handleImageClick(product.image)}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Info */}
              <p className="mt-2 text-sm text-gray-700">{product.name}</p>
              <p className="text-base font-bold text-pink-700">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-pink-700 text-3xl hover:text-pink-900 z-10 bg-white bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-pink-200 hover:bg-pink-50 transition-colors"
            >
              ×
            </button>
            
            {/* Product Info */}
            <div className="text-center mb-6 bg-white bg-opacity-80 rounded-2xl px-8 py-4 shadow-lg border border-pink-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {products.find(p => p.image === selectedImage)?.name}
              </h2>
              <p className="text-xl font-semibold text-pink-600">
                {products.find(p => p.image === selectedImage)?.price}
              </p>
            </div>
            
            {/* Enlarged Image */}
            <Image
              src={selectedImage}
              alt="Enlarged product image"
              width={1200}
              height={1200}
              className="max-w-[85vw] max-h-[70vh] object-contain rounded-2xl shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-1">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-md">dm to order </span>
          <a href="https://www.instagram.com/preetyprettysalon?igsh=MzhjaWZhNWNvZTQ=" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;




