import CartIndicator from "./CartIndicator";

type CartButtonProps = {
  onClick: () => void;
};

const CartButton = ({ onClick }: CartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="btn-round btn-base relative"
      aria-label="Cart"
    >
      <span className="iconify-[material-symbols--shopping-bag-outline]"></span>
      <CartIndicator />
    </button>
  );
};

export default CartButton;
