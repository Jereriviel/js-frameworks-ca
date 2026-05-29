import FavouriteIndicator from "./FavouritesIndicator";
type FavouriteButtonProps = {
  onClick: () => void;
};

const FavouriteButton = ({ onClick }: FavouriteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="btn-round relative"
      aria-label="Favourites"
    >
      <span className="iconify-[material-symbols--favorite-outline]"></span>

      <FavouriteIndicator />
    </button>
  );
};

export default FavouriteButton;
