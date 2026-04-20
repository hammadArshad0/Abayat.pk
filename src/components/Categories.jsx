import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/products';

// Premium smooth animations
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] // Super smooth Apple-like easing
    },
  }),
};

function CategoryCard({ cat, index, isLarge }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer w-full h-full block shadow-lg hover:shadow-2xl transition-shadow duration-700"
    >
      {/* Background Image Setup */}
      <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
        {cat.image ? (
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-800">
            <span className="text-9xl opacity-20">{cat.icon}</span>
          </div>
        )}
      </div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Subtle Inner Ring (Premium touch) */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-gold/40 transition-colors duration-500 z-20 pointer-events-none" />

      {/* Glassmorphism Count Badge */}
      <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 z-20 shadow-sm">
        <span className="text-white/90 text-xs font-poppins font-semibold tracking-wider">
          {cat.count} STYLES
        </span>
      </div>

      {/* Content Container */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end z-20">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {/* Category Icon */}
            <div className="text-gold text-2xl mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {cat.icon}
            </div>

            {/* Category Title */}
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide leading-tight">
              {cat.name}
            </h3>

            {/* Animated Hover Line */}
            <div className="w-12 h-0.5 bg-gold rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </div>

          {/* Action Button */}
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-gold group-hover:border-gold transition-all duration-500 ease-out flex-shrink-0">
            <ArrowUpRight size={20} className="text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="py-32 relative bg-white overflow-hidden border-b border-neutral-100">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, #000000 0%, transparent 70%)' }} />

      <div className="container-custom mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Sleek Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-gold/50" />
            <span className="text-gold text-xs font-poppins tracking-[0.3em] uppercase font-semibold">
              Explore Our World
            </span>
            <span className="w-8 h-px bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mt-2"
          >
            Shop by <span className="text-gradient-gold">Collection</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 font-poppins text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Curated modest fashion for the modern Muslim woman, masterfully crafted with love from Taxila, Pakistan.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

          {/* Large Featured Category (Spans 2 columns & 2 rows on large screens) */}
          {categories[0] && (
            <div className="col-span-1 md:col-span-2 md:row-span-2 h-full w-full">
              <CategoryCard cat={categories[0]} index={0} isLarge={true} />
            </div>
          )}

          {/* Tall Featured Category (Spans 2 rows) */}
          {categories[1] && (
            <div className="col-span-1 md:col-span-1 md:row-span-2 h-full w-full">
              <CategoryCard cat={categories[1]} index={1} />
            </div>
          )}

          {/* Remaining Normal Categories */}
          {categories.slice(2).map((cat, i) => (
            <div key={cat.id || i} className="col-span-1 h-full w-full">
              <CategoryCard cat={cat} index={i + 2} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}