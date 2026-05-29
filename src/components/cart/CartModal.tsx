import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";
import useCartStore from "../../store/cartStore";
import Spinner from "../common/LoadingSpinner";
import showSuccessToast from "../common/Toast";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function CartModal({ isOpen, onClose }: Props) {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);
  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      clearCart();
      showSuccessToast("Order has been placed.");
      onClose();
      navigate("/success");
    }, 1500);
  };
  const totalSavings = items.reduce((sum, item) => {
    const discount = item.product.price - item.product.discountedPrice;
    if (discount > 0) {
      return sum + discount * item.quantity;
    }
    return sum;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          <DialogBackdrop
            className="fixed inset-0 bg-black/30"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 flex w-full items-center justify-end overflow-y-auto"
          >
            <DialogPanel className="min-h-full w-[90%] max-w-145 space-y-4 overflow-y-auto rounded-sm bg-white p-4 sm:p-8">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <DialogTitle className="text-2xl font-bold">
                    Your Cart
                  </DialogTitle>
                  <button className="btn-round btn-base" onClick={onClose}>
                    <span className="iconify-[material-symbols--close]"></span>
                  </button>
                </div>
                <hr className="text-gray-medium" />
              </div>
              <div>
                {items.map((item) => (
                  <CartItem
                    key={item.product.id}
                    product={item.product}
                    quantity={item.quantity}
                  />
                ))}
              </div>
              {items.length === 0 ? (
                <p className="text-gray-dark my-8 text-center text-lg">
                  Cart empty
                </p>
              ) : (
                <>
                  <div className="bg-secondary-ultra-light border-secondary text-gray-dark my-8 flex flex-col gap-4 rounded-sm border p-4 md:text-lg">
                    <div className="flex items-center justify-between">
                      <p>Shipping:</p>
                      <div className="flex items-center gap-2">
                        <span className="iconify-[material-symbols--check]"></span>
                        <p>Free</p>
                      </div>
                    </div>
                    {totalSavings > 0 && (
                      <div className="flex justify-between">
                        <p>You saved:</p>
                        <p>{totalSavings.toFixed(2)} NOK</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex justify-between text-lg font-semibold md:text-2xl">
                      <p>Total</p>
                      <p>{total.toFixed(2)} NOK</p>
                    </div>
                    <button
                      className="btn-primary flex items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-70"
                      onClick={handleCheckout}
                      disabled={isCheckingOut || items.length === 0}
                    >
                      {isCheckingOut ? (
                        <>
                          <Spinner />
                          Processing...
                        </>
                      ) : (
                        "One-Click Checkout"
                      )}
                    </button>
                  </div>
                </>
              )}
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default CartModal;
