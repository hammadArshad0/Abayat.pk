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
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.03) 0%, transparent 65%)' }} />

      {/* Diagonal gold lines decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-px h-full bg-gold"
            style={{ left: `${(i + 1) * 16}%`, transform: 'rotate(12deg)', transformOrigin: 'top' }} />
        ))}
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 rounded-2xl border border-gold/30 flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.08)' }}>
              <Mail size={28} className="text-gold" />
            </div>

            <span className="text-gold text-xs font-poppins tracking-[0.5em] uppercase font-medium">
              Stay Connected
            </span>
            <h2 className="section-title mt-3 mb-4">
              Join Our <span className="text-gradient-gold">Royal Circle</span>
            </h2>
            <p className="text-neutral-500 font-poppins text-sm leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Subscribe for exclusive access to new arrivals, members-only discounts, and modest fashion inspiration delivered to your inbox.
            </p>

            {/* Form */}
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="relative max-w-md mx-auto lg:mx-0">
                <div className="flex gap-0 rounded-full border border-neutral-300 overflow-hidden p-1 bg-neutral-50 shadow-sm">
                  <div className="flex items-center pl-4 flex-shrink-0">
                    <Mail size={16} className="text-neutral-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent px-4 py-3 text-neutral-900 placeholder-neutral-400 font-poppins text-sm outline-none"
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
                <p className="text-neutral-400 text-xs font-poppins mt-3">
                  No spam, ever. Unsubscribe anytime. 💌
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center lg:items-start gap-3"
              >
                <CheckCircle size={52} className="text-gold" />
                <p className="text-neutral-900 font-playfair text-xl font-semibold">Welcome to the Royal Circle!</p>
                <p className="text-neutral-500 font-poppins text-sm">
                  You'll receive exclusive updates and offers soon. JazakAllah! ✨
                </p>
              </motion.div>
            )}

            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
              {['Exclusive Deals', 'New Arrivals First', 'Style Tips'].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-500 text-xs font-poppins">
                  <div className="w-1 h-1 rounded-full bg-gold" />
                  {b}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Map Integration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-neutral-200 relative group"
          >
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <iframe
              title="Abayat.pk Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.516422896627!2d72.79815041520141!3d33.72146958069502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa7aeb3e45dc1%3A0xc31245eebe154366!2sTaxila%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 object-cover"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
