import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import RemoveButton from "../common/RemoveButton";
import DiscountBadge from "../product/DiscountBadge";
import useFavouritesStore from "../../store/favouriteStore";
import AddToCartButton from "../product/AddToCartButton";

type Props = {
  product: Product;
};

const FavouriteItem = ({ product }: Props) => {
  const removeFavourite = useFavouritesStore((state) => state.removeFavourite);

  const hasDiscount = product.discountedPrice < product.price;

  return (
    <article className="flex-col">
      <div className="flex gap-4 py-4">
        <Link to={`/product/${product.id}`}>
          <div className="relative size-22 overflow-hidden rounded-sm">
            <DiscountBadge product={product} size="small" />

            <img
              src={product.image.url}
              alt={product.image.alt}
              className="object-cover"
            />
          </div>
        </Link>

        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold sm:text-lg">{product.title}</h3>
              <RemoveButton
                list="favourites"
                onClick={() => removeFavourite(product.id)}
              />
            </div>
            <AddToCartButton product={product} size="small" />
            <div className="flex justify-end">
              <div className="flex flex-col gap-1 text-right sm:gap-2">
                {hasDiscount ? (
                  <>
                    <s className="text-gray-dark text-sm">
                      {product.price} NOK
                    </s>
                    <p className="font-semibold">
                      {product.discountedPrice} NOK
                    </p>
                  </>
                ) : (
                  <p className="font-semibold">{product.price} NOK</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-medium" />
    </article>
  );
};

export default FavouriteItem;
