import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call and payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  const closeAndReset = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => setSuccess(false), 500); // reset after animation
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAndReset}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={closeAndReset}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-200 transition-colors z-10"
            >
              <X size={18} />
            </button>

            {!success ? (
              <>
                {/* Left Side: Order Summary */}
                <div className="bg-neutral-50 p-6 md:p-8 md:w-2/5 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col overflow-y-auto">
                  <h3 className="font-playfair text-xl font-bold text-neutral-900 mb-6">Order Summary</h3>
                  <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4 mb-6">
                    {cartItems.map((item, i) => (
                      <div key={`${item.id}-${i}`} className="flex gap-3">
                        <div className="w-16 h-20 rounded-lg bg-neutral-200 overflow-hidden flex-shrink-0">
                          {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                        </div>
                        <div className="flex flex-col py-1">
                          <h4 className="font-poppins text-xs font-semibold text-neutral-900 line-clamp-1">{item.name}</h4>
                          <span className="text-neutral-500 text-[10px] mt-0.5">Qty: {item.quantity}</span>
                          <span className="font-playfair font-bold text-neutral-900 mt-auto">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-neutral-200 pt-4 mt-auto">
                    <div className="flex justify-between text-neutral-500 text-sm font-poppins mb-2">
                      <span>Subtotal</span>
                      <span>Rs. {cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-neutral-500 text-sm font-poppins mb-4">
                      <span>Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between text-neutral-900 font-playfair font-bold text-xl">
                      <span>Total</span>
                      <span>Rs. {cartTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-6 md:p-8 md:w-3/5 overflow-y-auto relative">
                  <h3 className="font-playfair text-2xl font-bold text-neutral-900 mb-6">Checkout</h3>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-medium text-neutral-600">Full Name</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-poppins text-sm" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-medium text-neutral-600">Phone Number</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-poppins text-sm" placeholder="0300 1234567" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-poppins font-medium text-neutral-600">Delivery Address</label>
                      <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-poppins text-sm" placeholder="House 123, Street 4, Block A" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-poppins font-medium text-neutral-600">City</label>
                      <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-poppins text-sm" placeholder="Taxila" />
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <label className="text-xs font-poppins font-medium text-neutral-600 mb-1">Payment Method</label>
                      
                      <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-black bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300'}`}>
                        <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-neutral-300 bg-white">
                          {formData.paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                        </div>
                        <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleInputChange} className="hidden" />
                        <div>
                          <p className="font-poppins font-medium text-sm text-neutral-900">Cash on Delivery (COD)</p>
                          <p className="font-poppins text-[10px] text-neutral-500 mt-0.5">Pay when you receive your order.</p>
                        </div>
                      </label>

                      <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.paymentMethod === 'bank' ? 'border-black bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300'}`}>
                        <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-neutral-300 bg-white">
                          {formData.paymentMethod === 'bank' && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                        </div>
                        <input type="radio" name="paymentMethod" value="bank" checked={formData.paymentMethod === 'bank'} onChange={handleInputChange} className="hidden" />
                        <div>
                          <p className="font-poppins font-medium text-sm text-neutral-900">Bank Transfer</p>
                          <p className="font-poppins text-[10px] text-neutral-500 mt-0.5">Transfer directly to our Meezan Bank account.</p>
                        </div>
                      </label>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={loading || cartItems.length === 0}
                        className="w-full bg-black text-white rounded-xl py-4 font-poppins font-semibold flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors shadow-lg shadow-black/10 active:scale-[0.98]"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          'Complete Order'
                        )}
                      </button>
                      <div className="flex items-center justify-center gap-1.5 mt-4 text-neutral-400 font-poppins text-[10px]">
                        <ShieldCheck size={12} /> Securely encypted and processed
                      </div>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              // Success State
              <div className="w-full p-10 md:p-16 flex flex-col items-center justify-center text-center bg-white">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 20, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 border border-green-100"
                >
                  <CheckCircle size={32} className="text-green-600" />
                </motion.div>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-playfair text-3xl md:text-4xl font-bold text-neutral-900 mb-3"
                >
                  Order Placed successfully!
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-neutral-500 font-poppins text-sm max-w-sm mb-8"
                >
                  JazakAllah for choosing Abayat.pk. Your order has been received and is currently being processed.
                </motion.p>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={closeAndReset}
                  className="btn-outline border-neutral-200"
                >
                  Continue Shopping
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
