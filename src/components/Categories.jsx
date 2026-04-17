import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronRight } from 'lucide-react';
import { categories } from '../data/products';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

function CategoryCard({ cat, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: index === 0 || index === 1 ? '4/5' : '3/4' }}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${cat.gradient} transition-transform duration-700 group-hover:scale-110`}>
        {cat.image && (
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
          />
        )}
        {!cat.image && (
          <div className="w-full h-full flex items-center justify-center opacity-10">
            <span className="text-9xl">{cat.icon}</span>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

      {/* Gold border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-all duration-500" />

      {/* Gold shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
              {cat.icon}
            </div>
            <h3 className="font-playfair text-xl font-bold text-beige group-hover:text-gold transition-colors duration-300 leading-tight">
              {cat.name}
            </h3>
            <p className="text-nude/50 text-xs font-poppins mt-1 tracking-wide">
              {cat.count} Styles
            </p>
          </div>
          <div className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-400 flex-shrink-0 mt-auto">
            <ChevronRight size={16} className="text-gold" />
          </div>
        </div>

        {/* Hover bar */}
        <div className="h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Count badge */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-gold/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <span className="text-gold text-xs font-poppins font-medium">{cat.count}+</span>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs font-poppins tracking-[0.5em] uppercase font-medium"
          >
            Explore Our World
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mt-3"
          >
            Shop by <span className="text-gradient-gold">Collection</span>
          </motion.h2>
          <span className="gold-line" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-nude/50 font-poppins text-sm mt-4 max-w-md mx-auto leading-relaxed"
          >
            Curated modest fashion for the modern Muslim woman, crafted with love from Taxila, Pakistan.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {/* First two featured — span 2 rows */}
          <div className="row-span-2 col-span-1">
            <CategoryCard cat={categories[0]} index={0} />
          </div>
          <div className="row-span-2 col-span-1">
            <CategoryCard cat={categories[1]} index={1} />
          </div>
          {/* Rest normal */}
          {categories.slice(2).map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i + 2} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
