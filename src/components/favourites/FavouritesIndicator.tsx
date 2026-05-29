import useFavouritesStore from "../../store/favouriteStore";

const FavouriteIndicator = () => {
  const favourites = useFavouritesStore((state) => state.favourites);

  if (favourites.length === 0) return null;

  return (
    <span className="bg-primary-dark absolute left-4 flex size-4 -translate-y-1/2 items-center justify-center rounded-full text-xs text-white sm:left-6">
      {favourites.length}
    </span>
  );
};

export default FavouriteIndicator;
