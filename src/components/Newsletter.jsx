import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 65%)' }} />

      {/* Diagonal gold lines decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-px h-full bg-gold"
            style={{ left: `${(i + 1) * 16}%`, transform: 'rotate(12deg)', transformOrigin: 'top' }} />
        ))}
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl border border-gold/30 flex items-center justify-center"
            style={{ background: 'rgba(212,175,55,0.08)' }}>
            <Mail size={28} className="text-gold" />
          </div>

          <span className="text-gold text-xs font-poppins tracking-[0.5em] uppercase font-medium">
            Stay Connected
          </span>
          <h2 className="section-title mt-3 mb-4">
            Join Our <span className="text-gradient-gold">Royal Circle</span>
          </h2>
          <p className="text-nude/50 font-poppins text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Subscribe for exclusive access to new arrivals, members-only discounts, and modest fashion inspiration delivered to your inbox.
          </p>

          {/* Form */}
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <div className="flex gap-0 rounded-full border border-gold/20 overflow-hidden p-1"
                style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(10px)' }}>
                <div className="flex items-center pl-4 flex-shrink-0">
                  <Mail size={16} className="text-gold/40" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent px-4 py-3 text-beige placeholder-nude/30 font-poppins text-sm outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold rounded-full flex-shrink-0 py-3 px-6 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={14} /> Subscribe
                    </span>
                  )}
                </button>
              </div>
              <p className="text-nude/30 text-xs font-poppins mt-3">
                No spam, ever. Unsubscribe anytime. 💌
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <CheckCircle size={52} className="text-gold" />
              <p className="text-beige font-playfair text-xl font-semibold">Welcome to the Royal Circle!</p>
              <p className="text-nude/50 font-poppins text-sm">
                You'll receive exclusive updates and offers soon. JazakAllah! ✨
              </p>
            </motion.div>
          )}

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {['Exclusive Deals', 'New Arrivals First', 'Style Tips'].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-nude/40 text-xs font-poppins">
                <div className="w-1 h-1 rounded-full bg-gold" />
                {b}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
