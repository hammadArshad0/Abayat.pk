import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { featuredProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? 'text-gold fill-gold' : 'text-nude/20'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product, index }) {
  const [wishlisted, setWishlisted] = useState(false);
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      className="product-card group flex flex-col"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl" style={{ aspectRatio: '3/4' }}>
        {/* Background */}
        <div className={`w-full h-full bg-gradient-to-b ${product.gradient} transition-transform duration-700 group-hover:scale-110`}>
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top opacity-100 transition-opacity duration-500"
            />
          )}
          {!product.image && (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 opacity-30">
              <ShoppingBag size={48} className="text-gold" />
              <span className="text-nude/50 text-xs font-poppins">{product.category}</span>
            </div>
          )}
        </div>

        {/* Overlay with quick actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick view */}
        <div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button className="w-full py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-gold/20 text-gold text-xs font-poppins font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-gold/10 transition-colors">
            <Eye size={14} /> Quick View
          </button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-poppins font-semibold tracking-wide ${
              product.badge === 'Sale' ? 'bg-red-900/80 text-red-200 border border-red-700/40' :
              product.badge === 'New Arrival' ? 'bg-gold/20 text-gold border border-gold/30' :
              product.badge === 'Limited' ? 'bg-purple-900/60 text-purple-200 border border-purple-500/30' :
              'bg-black/60 text-nude border border-white/10'
            } backdrop-blur-sm`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-poppins font-bold bg-gold text-black">
              -{discount}%
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute bottom-16 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-gold/30"
        >
          <Heart
            size={15}
            className={wishlisted ? 'text-red-400 fill-red-400' : 'text-nude/60'}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-neutral-400 text-[10px] font-poppins uppercase tracking-widest mb-1">
          {product.category}
        </span>
        <h3 className="font-playfair text-neutral-900 font-semibold text-base leading-tight mb-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-neutral-500 text-xs font-poppins leading-relaxed mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-neutral-400 text-xs font-poppins">({product.reviews})</span>
        </div>

        {/* Color dots */}
        <div className="flex items-center gap-1.5 mb-4">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-neutral-300 cursor-pointer hover:scale-125 transition-transform shadow-sm"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-neutral-100">
          <div className="flex items-baseline gap-2">
            <span className="text-neutral-900 font-playfair text-lg font-bold">
              Rs. {product.price.toLocaleString()}
            </span>
            <span className="text-neutral-400 text-xs line-through font-poppins">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              added
                ? 'bg-gold text-black scale-95'
                : 'bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-black hover:scale-105'
            }`}
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Abaya', 'Hijabs', 'Niqab', 'Saudi Niqab', 'Sleeves'];

  const filtered = filter === 'All'
    ? featuredProducts
    : featuredProducts.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="products" className="py-24 relative bg-neutral-50 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-xs font-poppins tracking-[0.5em] uppercase font-medium"
          >
            Handpicked For You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mt-3"
          >
            Featured <span className="text-gradient-gold">Products</span>
          </motion.h2>
          <span className="gold-line" />
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-poppins font-medium tracking-wide transition-all duration-300 ${
                filter === f
                  ? 'bg-neutral-900 text-white shadow-lg shadow-black/10'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:border-gold hover:text-gold shadow-sm'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-outline">
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
