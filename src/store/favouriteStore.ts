import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/Product";

type FavouritesStore = {
  favourites: Product[];

  addFavourite: (product: Product) => void;
  removeFavourite: (productId: string) => void;
  toggleFavourite: (product: Product) => void;

  isFavourite: (productId: string) => boolean;
};

const useFavouritesStore = create<FavouritesStore>()(
  persist(
    (set, get) => ({
      favourites: [],

      addFavourite: (product) =>
        set((state) => {
          const exists = state.favourites.some(
            (item) => item.id === product.id,
          );

          if (exists) return state;

          return {
            favourites: [...state.favourites, product],
          };
        }),

      removeFavourite: (productId) =>
        set((state) => ({
          favourites: state.favourites.filter((item) => item.id !== productId),
        })),

      toggleFavourite: (product) => {
        const exists = get().favourites.some((item) => item.id === product.id);

        if (exists) {
          get().removeFavourite(product.id);
        } else {
          get().addFavourite(product);
        }
      },

      isFavourite: (productId) =>
        get().favourites.some((item) => item.id === productId),
    }),
    {
      name: "favourites-storage",
    },
  ),
);

export default useFavouritesStore;
