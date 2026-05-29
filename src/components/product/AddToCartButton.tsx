import useCartStore from "../../store/cartStore";
import type { Product } from "../../types/Product";
import showSuccessToast from "../common/Toast";

type Props = {
  product: Product;
  size: "small" | "medium";
};

function AddToCartButton({ product, size }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const handleClick = () => {
    addItem(product);
    showSuccessToast("Item added to cart.");
  };

  const btnSize = {
    small: "btn-primary-small",
    medium: "btn-primary",
  };

  return (
    <button onClick={handleClick} className={`${btnSize[size]}`}>
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
