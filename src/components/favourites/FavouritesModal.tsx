import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import useFavouritesStore from "../../store/favouriteStore";
import FavouriteItem from "./FavouritesItem";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function FavouritesModal({ isOpen, onClose }: Props) {
  const favourites = useFavouritesStore((state) => state.favourites);

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
            className="fixed inset-0 flex w-full items-center justify-end overflow-hidden"
          >
            <DialogPanel className="h-full w-[90%] max-w-145 space-y-4 rounded-sm bg-white p-4 sm:p-8">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <DialogTitle className="text-2xl font-bold">
                    Your Favourites
                  </DialogTitle>
                  <button
                    className="btn-round flex items-center justify-center"
                    onClick={onClose}
                  >
                    <span className="iconify-[material-symbols--close]"></span>
                  </button>
                </div>
                <hr className="text-gray-medium" />
              </div>
              <div>
                <div>
                  {favourites.length === 0 ? (
                    <p className="text-gray-dark my-8 text-center text-lg">
                      No favourites yet
                    </p>
                  ) : (
                    favourites.map((product) => (
                      <FavouriteItem key={product.id} product={product} />
                    ))
                  )}
                </div>
              </div>
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default FavouritesModal;
