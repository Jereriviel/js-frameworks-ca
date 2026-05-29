import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import DiscountBadge from "../product/DiscountBadge";
import RemoveButton from "../common/RemoveButton";
import QuantitySelector from "./QuantitySelector";
import useCartStore from "../../store/cartStore";

type Props = {
  product: Product;
  quantity: number;
};

const CartItem = ({ product, quantity }: Props) => {
  const hasDiscount = product.discountedPrice < product.price;
  const removeItem = useCartStore((state) => state.removeItem);

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
                list="cart"
                onClick={() => removeItem(product.id)}
              />
            </div>
            <div className="mt-2">
              <QuantitySelector productId={product.id} quantity={quantity} />
            </div>

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

export default CartItem;
