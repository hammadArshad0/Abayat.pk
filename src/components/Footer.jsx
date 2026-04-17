import { motion } from 'framer-motion';
import { MapPin, Phone, Heart, ChevronRight } from 'lucide-react';

const footerLinks = {
  Shop: ['Abayas', 'Hijabs & Scarves', 'Saudi Niqab', 'Niqab', 'Sleeves', 'Caps', 'Gloves'],
  Info: ['About Us', 'Our Story', 'Sustainability', 'Size Guide', 'Care Instructions'],
  Support: ['Track Order', 'Returns Policy', 'Shipping Info', 'FAQ', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 overflow-hidden">
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,1), rgba(5,5,5,1))' }} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }} />

      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gradient-gold font-playfair text-3xl font-bold mb-1">Abayat.pk</h2>
              <p className="text-nude/30 text-[10px] font-poppins tracking-[0.4em] uppercase mb-5">Luxury Modest Fashion</p>
              <p className="text-nude/40 font-poppins text-sm leading-relaxed mb-6 max-w-xs">
                Crafting elegance for the modern Muslim woman. Premium modest fashion delivered all over Pakistan with love from Taxila.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 text-nude/50 hover:text-gold transition-colors group cursor-pointer">
                  <div className="w-7 h-7 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors flex-shrink-0">
                    <MapPin size={12} className="text-gold/60" />
                  </div>
                  <span className="text-xs font-poppins">Taxila, Punjab, Pakistan</span>
                </div>
                <a href="tel:03180521207" className="flex items-center gap-2.5 text-nude/50 hover:text-gold transition-colors group">
                  <div className="w-7 h-7 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors flex-shrink-0">
                    <Phone size={12} className="text-gold/60" />
                  </div>
                  <span className="text-xs font-poppins">0318-0521207</span>
                </a>
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-7">
                {[
                  // { icon: Instagram, label: 'Instagram' },
                  // { icon: Facebook, label: 'Facebook' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-nude/40 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
                {/* TikTok */}
                <a href="#" aria-label="TikTok"
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-nude/40 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.2 8.2 0 004.79 1.53V6.75a4.85 4.85 0 01-1.02-.06z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], colIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIdx * 0.1 }}
            >
              <h4 className="text-beige font-playfair font-semibold text-base mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-nude/40 hover:text-gold font-poppins text-xs transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight size={11} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-nude/25 text-xs font-poppins text-center md:text-left">
            © 2025 Abayat.pk. All rights reserved. Taxila, Pakistan.
          </p>
          <p className="text-nude/25 text-xs font-poppins flex items-center gap-1">
            Made with <Heart size={11} className="text-gold fill-gold" /> for modest fashion
          </p>
          <div className="flex items-center gap-4">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-nude/25 hover:text-gold/60 text-xs font-poppins transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
