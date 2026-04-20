import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { heroSlides } from '../data/products';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="hero-swiper w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image with Zoom Effect */}
            <div className="relative w-full h-full">
              <motion.div
                key={`bg-${activeIndex}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-top"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </motion.div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Gold shimmer line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom w-full">
                  <div className="max-w-2xl">
                    {/* Tag */}
                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <motion.div
                          key={`tag-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center gap-2 mb-5"
                        >
                          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm">
                            <Sparkles size={12} className="text-gold" />
                            <span className="text-gold text-xs font-poppins font-medium tracking-widest uppercase">
                              {slide.tag}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Title */}
                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <>
                          <motion.h1
                            key={`title-${index}`}
                            custom={0}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-beige leading-none mb-1"
                          >
                            {slide.title}
                          </motion.h1>
                          <motion.h2
                            key={`subtitle-${index}`}
                            custom={1}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-gold leading-tight mb-5"
                          >
                            {slide.subtitle}
                          </motion.h2>
                          <motion.p
                            key={`desc-${index}`}
                            custom={2}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-nude/70 font-poppins text-base md:text-lg leading-relaxed mb-8 max-w-md"
                          >
                            {slide.description}
                          </motion.p>
                          <motion.div
                            key={`cta-${index}`}
                            custom={3}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-4"
                          >
                            <a href="#products" className="btn-gold group">
                              {slide.cta}
                              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#categories" className="btn-outline-hero">
                              {slide.ctaSecondary}
                            </a>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Slide counter */}
              <div className="absolute bottom-16 right-8 md:right-16 hidden md:flex items-center gap-3">
                <span className="text-gold font-playfair text-3xl font-bold">
                  0{activeIndex + 1}
                </span>
                <div className="w-px h-8 bg-gold/30" />
                <span className="text-nude/40 font-poppins text-sm">
                  0{heroSlides.length}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative corner ornament */}
      <div className="absolute top-28 right-8 md:right-16 hidden md:block opacity-20 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="1" y="1" width="78" height="78" rx="4" stroke="#D4AF37" strokeWidth="1"/>
          <rect x="10" y="10" width="60" height="60" rx="2" stroke="#D4AF37" strokeWidth="0.5"/>
          <circle cx="40" cy="40" r="15" stroke="#D4AF37" strokeWidth="0.5"/>
          <path d="M40 25 L40 55 M25 40 L55 40" stroke="#D4AF37" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 hidden md:flex">
        <span className="text-nude/30 text-[10px] font-poppins tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </div>
    </section>
  );
}
