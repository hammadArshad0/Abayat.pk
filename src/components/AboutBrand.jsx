import { motion } from 'framer-motion';
import { Shield, Truck, Star, Award, Gem, Globe } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Quality',
    desc: 'Every piece is crafted from the finest imported fabrics, ensuring lasting elegance.',
  },
  {
    icon: Truck,
    title: 'All Pakistan Delivery',
    desc: 'Fast and reliable shipping to every city and town across Pakistan.',
  },
  {
    icon: Shield,
    title: 'Authentic Guarantee',
    desc: '100% authentic products. What you see is exactly what you receive.',
  },
  {
    icon: Star,
    title: 'Expert Craftsmanship',
    desc: 'Hand-selected designs by our team of modest fashion experts.',
  },
  {
    icon: Award,
    title: '5,000+ Happy Clients',
    desc: 'Trusted by thousands of women across Pakistan and beyond.',
  },
  {
    icon: Globe,
    title: 'Middle Eastern Inspired',
    desc: 'Designs inspired by luxury Saudi and UAE modest fashion trends.',
  },
];

export default function AboutBrand() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.03) 0%, transparent 50%, rgba(212,175,55,0.02) 100%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Ornament */}
      <div className="absolute right-8 top-12 opacity-5 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M100 10 L100 190 M10 100 L190 100 M29 29 L171 171 M171 29 L29 171" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-custom">
        {/* Top - Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-xs font-poppins tracking-[0.5em] uppercase font-medium">
              Our Story
            </span>
            <h2 className="section-title mt-3 mb-6">
              Where Faith Meets <span className="text-gradient-gold">Fashion</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-7" />
            <p className="text-nude/55 font-poppins text-sm leading-8 mb-5">
              Born in the heart of Taxila, Pakistan, <strong className="text-beige font-medium">Abayat.pk</strong> was founded with a singular vision — to bring world-class modest fashion to every Muslim woman across Pakistan, without compromise on quality or elegance.
            </p>
            <p className="text-nude/55 font-poppins text-sm leading-8 mb-8">
              Inspired by the grandeur of Middle Eastern luxury fashion houses, we meticulously curate every piece in our collection — from hand-embroidered abayas to ultra-fine Saudi niqabs — ensuring that modesty and magnificence go hand in hand.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '7+', label: 'Categories' },
                { value: '200+', label: 'Products' },
                { value: '3 Yrs', label: 'Experience' },
              ].map((stat, i) => (
                <div key={i} className="text-center glass-card py-5 px-2 hover:border-gold/20 transition-colors duration-300">
                  <div className="text-gradient-gold font-playfair text-2xl font-bold">{stat.value}</div>
                  <div className="text-nude/40 text-[10px] font-poppins mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <div className="w-full h-full bg-gradient-to-b from-stone-900 to-black">
                <img
                  src="/hero1.png"
                  alt="Abayat.pk Brand Story"
                  className="w-full h-full object-cover object-top opacity-75"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Bottom tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card px-5 py-4 border-gold/20">
                  <p className="text-gradient-gold font-playfair text-lg font-semibold">"Elegance is our tradition"</p>
                  <p className="text-nude/50 text-xs font-poppins mt-1">— Abayat.pk, Taxila</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.08)', backdropFilter: 'blur(8px)' }}
            >
              <div className="text-center">
                <p className="text-gradient-gold font-playfair text-2xl font-bold leading-none">✦</p>
                <p className="text-gold text-[9px] font-poppins tracking-widest mt-1">PREMIUM</p>
              </div>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-2xl border border-gold/20 -z-10" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl font-bold text-beige"
          >
            Why Choose <span className="text-gradient-gold">Abayat.pk</span>
          </motion.h3>
          <span className="gold-line" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 group hover:border-gold/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="w-11 h-11 rounded-xl border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold/40 transition-colors duration-300"
                style={{ background: 'rgba(212,175,55,0.07)' }}>
                <feat.icon size={20} className="text-gold" />
              </div>
              <h4 className="font-playfair text-beige font-semibold text-base mb-2 group-hover:text-gold transition-colors duration-300">
                {feat.title}
              </h4>
              <p className="text-nude/40 text-xs font-poppins leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
