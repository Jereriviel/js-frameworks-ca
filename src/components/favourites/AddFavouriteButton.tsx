import type { Product } from "../../types/Product";
import useFavouritesStore from "../../store/favouriteStore";
import showSuccessToast from "../common/Toast";

type Props = {
  product: Product;
};

const AddFavouriteButton = ({ product }: Props) => {
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite);

  const isFavourite = useFavouritesStore((state) =>
    state.isFavourite(product.id),
  );

  const handleClick = () => {
    toggleFavourite(product);

    if (isFavourite) {
      showSuccessToast("Item removed from favourites.");
    } else {
      showSuccessToast("Item added to favourites.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-primary-light/75 btn-base absolute top-2 right-2 z-40 h-10 w-10 rounded-full bg-white/75"
      aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <span
        className={`text-primary-dark ${
          isFavourite
            ? "iconify-[material-symbols--favorite] h-6 w-6"
            : "iconify-[material-symbols--favorite-outline] h-6 w-6"
        }`}
      ></span>
    </button>
  );
};

export default AddFavouriteButton;
