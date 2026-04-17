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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 70%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

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
              className="glass-card p-7 relative group hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={52} className="text-gold" />
              </div>

              {/* Top gold line on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-all duration-500" />

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-nude/60 font-poppins text-sm leading-relaxed mt-4 mb-6 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 border border-gold/20`}>
                  <span className="text-beige text-sm font-playfair font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-beige font-poppins font-semibold text-sm">{t.name}</p>
                  <p className="text-nude/40 font-poppins text-xs">📍 {t.city}</p>
                </div>
                <div className="ml-auto">
                  <div className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                    <span className="text-gold text-[10px] font-poppins font-medium tracking-wide">Verified ✓</span>
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
            <div key={i} className="text-center glass-card py-6 px-4">
              <div className="text-gradient-gold font-playfair text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-nude/40 text-xs font-poppins mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
