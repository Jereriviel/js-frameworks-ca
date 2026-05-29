import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import DiscountBadge from "./DiscountBadge";
import Rating from "./Rating";
import AddFavouriteButton from "../favourites/AddFavouriteButton";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const hasDiscount = product.discountedPrice < product.price;
  const numberOfRatings = product.reviews.length;

  return (
    <article className="border-gray-light grid-cols-[minmax(0, 1fr)] relative grid cursor-pointer grid-rows-[max-content] rounded-sm border transition duration-300 ease-in-out sm:hover:scale-103 sm:hover:shadow-lg">
      <AddFavouriteButton product={product} />
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <DiscountBadge size="medium" product={product} />
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="aspect-3/4 w-full rounded-sm object-cover"
          />
        </div>
        <div className="grid-cols-auto grid gap-6 p-4">
          <div className="mt-auto flex flex-col gap-2">
            <h3 className="font-semibold sm:text-lg">{product.title}</h3>
            <div className="flex flex-col flex-wrap md:flex-row md:gap-2">
              <div>
                <Rating rating={product.rating} />
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">{product.rating}</p>
                <p className="text-gray-dark">
                  ({numberOfRatings}
                  {numberOfRatings === 1 ? " rating)" : " ratings)"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            {hasDiscount ? (
              <>
                <p className="text-lg font-semibold sm:text-2xl">
                  {product.discountedPrice} NOK
                </p>
                <div className="text-gray-dark flex flex-col flex-wrap sm:gap-2 md:flex-row">
                  <p>Former Price:</p>
                  <s>{product.price} NOK</s>
                </div>
              </>
            ) : (
              <p className="text-lg font-semibold sm:text-2xl">
                {product.price} NOK
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
