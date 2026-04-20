import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className={i < rating ? 'text-gold fill-gold' : 'text-nude/20'} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-neutral-50 overflow-hidden border-t border-neutral-200">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.03) 0%, transparent 70%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-neutral-100" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-100" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-xs font-poppins tracking-[0.5em] uppercase font-medium"
          >
            What Our Customers Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mt-3"
          >
            Loved by <span className="text-gradient-gold">Thousands</span>
          </motion.h2>
          <span className="gold-line" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass-card p-7 relative group hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] bg-white"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Quote size={52} className="text-gold" />
              </div>

              {/* Top gold line on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-all duration-500" />

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-neutral-600 font-poppins text-sm leading-relaxed mt-4 mb-6 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br from-neutral-200 to-gray-300 flex items-center justify-center flex-shrink-0 border border-neutral-300 text-neutral-900`}>
                  <span className="text-sm font-playfair font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-neutral-900 font-poppins font-semibold text-sm">{t.name}</p>
                  <p className="text-neutral-400 font-poppins text-xs">📍 {t.city}</p>
                </div>
                <div className="ml-auto">
                  <div className="px-3 py-1 rounded-full bg-green-50 border border-green-200">
                    <span className="text-green-700 text-[10px] font-poppins font-medium tracking-wide">Verified ✓</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          {[
            { value: '5,000+', label: 'Happy Customers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '100%', label: 'Authentic Quality' },
          ].map((stat, i) => (
            <div key={i} className="text-center glass-card py-6 px-4 bg-white">
              <div className="text-gradient-gold font-playfair text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-neutral-500 text-xs font-poppins mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
