import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, cartItems, updateQuantity, removeFromCart, cartTotal, toggleCheckout } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <ShoppingBag size={18} className="text-gold" />
                </div>
                <h2 className="font-playfair text-2xl font-bold text-neutral-900">Your Bag</h2>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black hover:border-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral-400 gap-4">
                  <ShoppingBag size={64} className="opacity-20" />
                  <p className="font-poppins text-sm">Your bag is empty.</p>
                  <button onClick={() => setIsDrawerOpen(false)} className="btn-outline mt-4">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4">
                      {/* Image */}
                      <div className="w-24 h-32 rounded-xl bg-neutral-100 overflow-hidden flex-shrink-0 border border-neutral-100">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ShoppingBag className="text-neutral-300" />
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex flex-col flex-1 py-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-playfair text-neutral-900 font-semibold leading-tight pr-4">
                            {item.name}
                          </h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-red-500 transition-colors">
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-neutral-500 text-[10px] font-poppins uppercase tracking-wider mb-auto">
                          {item.category}
                        </p>
                        
                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 bg-neutral-50 rounded-lg px-2 py-1 border border-neutral-200">
                            <button onClick={() => updateQuantity(item.id, -1)} className="text-neutral-500 hover:text-black">
                              <Minus size={14} />
                            </button>
                            <span className="font-poppins text-xs font-semibold text-neutral-900 w-4 text-center">
                              {item.quantity}
                            </span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="text-neutral-500 hover:text-black">
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          {/* Price */}
                          <span className="font-playfair text-neutral-900 font-bold">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-neutral-100 bg-neutral-50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-poppins text-neutral-500 text-sm">Subtotal</span>
                  <span className="font-playfair text-2xl font-bold text-neutral-900">
                    Rs. {cartTotal.toLocaleString()}
                  </span>
                </div>
                <p className="text-neutral-400 text-xs font-poppins mb-6">
                  Shipping & taxes calculated at checkout.
                </p>
                <button
                  onClick={toggleCheckout}
                  className="w-full bg-black text-white rounded-xl py-4 font-poppins font-semibold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-lg shadow-black/10 active:scale-[0.98]"
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
