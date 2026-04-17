import { motion } from 'framer-motion';
import { Truck, RotateCcw, Phone, ShieldCheck } from 'lucide-react';

const strips = [
  { icon: Truck, text: 'Free Delivery All Over Pakistan' },
  { icon: ShieldCheck, text: '100% Authentic Products' },
  { icon: RotateCcw, text: 'Easy Returns & Exchanges' },
  { icon: Phone, text: '0318-0521207 – Call Us Anytime' },
];

export default function TrustStrip() {
  return (
    <section className="py-10 relative overflow-hidden border-y border-gold/10">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, rgba(13,13,13,1) 50%, rgba(212,175,55,0.04) 100%)' }} />
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {strips.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors duration-300"
                style={{ background: 'rgba(212,175,55,0.06)' }}>
                <item.icon size={18} className="text-gold" />
              </div>
              <p className="text-nude/50 text-xs font-poppins leading-relaxed group-hover:text-nude/70 transition-colors duration-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
