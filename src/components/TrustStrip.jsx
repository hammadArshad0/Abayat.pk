import { motion } from 'framer-motion';
import { Truck, RotateCcw, Phone, ShieldCheck } from 'lucide-react';

// Data ko Title aur Subtitle mein split kiya gaya hai for better UI
const strips = [
  {
    icon: Truck,
    title: 'Free Delivery',
    subtitle: 'All over Pakistan'
  },
  {
    icon: ShieldCheck,
    title: 'Authentic Products',
    subtitle: '100% Guaranteed Quality'
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    subtitle: '7-Days Exchange Policy'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    subtitle: '0318-0521207'
  },
];

export default function TrustStrip() {
  return (
    <section className="py-12 relative overflow-hidden bg-neutral-50 border-y border-neutral-200">

      {/* Premium Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.03) 0%, transparent 70%)' }} />

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strips.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] // Super smooth easing
              }}
              // Mobile par text center aur screens par left-aligned
              className="group flex flex-col items-center text-center sm:flex-row sm:text-left gap-5 p-4 rounded-2xl hover:bg-white transition-colors duration-500 cursor-default shadow-sm hover:shadow-md"
            >

              {/* Icon Container with Hover Glow */}
              <div className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-gold/50 group-hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] transition-all duration-500 ease-out relative">
                <item.icon size={22} className="text-gold opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Typography */}
              <div>
                <h4 className="font-playfair text-neutral-900 text-base md:text-lg font-semibold tracking-wide mb-1 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-neutral-500 text-xs font-poppins tracking-wider">
                  {item.subtitle}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}