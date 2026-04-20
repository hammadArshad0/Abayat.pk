import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, Heart, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#categories' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className="border-b border-gold/10 py-1.5 hidden md:block"
          style={{ background: 'rgba(212,175,55,0.06)' }}>
          <div className="container-custom flex justify-between items-center">
            <p className="text-xs text-white/60 font-poppins tracking-widest">
              📍 Taxila, Pakistan &nbsp;|&nbsp; 🚚 Free Delivery All Over Pakistan
            </p>
            <a
              href="tel:03180521207"
              className="flex items-center gap-1.5 text-xs text-gold/80 hover:text-gold transition-colors font-poppins tracking-wide"
            >
              <Phone size={11} /> 0318-0521207
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none group">
            <span className="text-gradient-gold font-playfair text-2xl md:text-3xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
              Abayat.pk
            </span>
            <span className="text-white/40 text-[9px] font-poppins tracking-[0.4em] uppercase mt-0.5">
              Luxury Modest Fashion
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`nav-link ${activeLink === link.label ? 'active text-gold' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="text-white/70 hover:text-gold transition-colors duration-300 hidden md:block">
              <Search size={18} />
            </button>
            <button className="text-white/70 hover:text-gold transition-colors duration-300 hidden md:block">
              <Heart size={18} />
            </button>
            <button className="relative text-white/70 hover:text-gold transition-colors duration-300">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-black text-[9px] font-bold rounded-full flex items-center justify-center font-poppins">
                0
              </span>
            </button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white/80 hover:text-gold transition-colors duration-300 ml-1"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-gold/10"
              style={{ background: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(20px)' }}
            >
              <ul className="flex flex-col py-4 px-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
                      className="block py-3 text-white/80 hover:text-gold font-poppins text-sm tracking-wide border-b border-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <li className="mt-3">
                  <a href="tel:03180521207" className="flex items-center gap-2 text-gold/80 text-sm font-poppins">
                    <Phone size={13} /> 0318-0521207
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
