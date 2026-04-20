import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingBag, Sparkles } from 'lucide-react';
import { featuredProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function TrendingCard({ product, index }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    setAdded(true);
    addToCart(product);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="product-card group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-t-3xl bg-neutral-100" style={{ aspectRatio: '4/5' }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-neutral-300">
            <ShoppingBag size={48} />
          </div>
        )}

        <div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button className="w-full py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-neutral-200 text-neutral-900 text-xs font-poppins font-medium flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors shadow-sm">
            <Eye size={14} /> Quick View
          </button>
        </div>

        {/* Badges for Sale section */}
        {discount > 0 && (
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-poppins font-bold shadow-lg shadow-red-600/30">
              SALE -{discount}%
            </div>
          </div>
        )}
        {(product.badge === 'Trending' || product.badge === 'Popular') && (
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1.5 rounded-full bg-gold text-black text-xs font-poppins font-bold shadow-lg shadow-gold/30">
              <Sparkles size={12} className="inline mr-1" /> FIRE
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-neutral-400 text-[10px] font-poppins uppercase tracking-widest mb-1.5">
          {product.category}
        </span>
        <h3 className="font-playfair text-neutral-900 font-bold text-lg mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1.5 mb-4">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-neutral-200"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
          <div className="flex flex-col">
            <span className="text-neutral-400 text-xs line-through font-poppins mb-0.5">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
            <span className="text-neutral-900 font-playfair text-xl font-bold">
              Rs. {product.price.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className={`px-5 py-2.5 rounded-xl font-poppins text-xs font-semibold transition-all shadow-sm ${
              added
                ? 'bg-green-600 text-white shadow-green-600/30'
                : 'bg-black text-white hover:bg-neutral-800'
            }`}
          >
            {added ? 'Added' : 'Add to Bag'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrendingArticles() {
  // Let's filter for trending/sale products from the existing featured ones for demonstration
  const trendingProducts = featuredProducts.filter(p => p.badge === 'Sale' || p.badge === 'Trending' || p.badge === 'Popular' || p.price < p.originalPrice).slice(0, 4);

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-3"
            >
              <div className="px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-poppins tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" /> Live Now
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900"
            >
              Trending <span className="text-gradient-gold">Articles</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <a href="#products" className="text-neutral-500 font-poppins text-sm font-medium hover:text-gold transition-colors flex items-center gap-2">
              View Entire Sale <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, i) => (
            <TrendingCard key={product.id} product={product} index={i} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
            <a href="#products" className="btn-outline">
              View Entire Sale
            </a>
        </div>
      </div>
    </section>
  );
}
