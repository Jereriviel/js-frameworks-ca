import type { Product } from "../../types/Product";

type Props = {
  product: Product;
  isActive?: boolean;
};

const SearchResultsProduct = ({ product, isActive }: Props) => {
  return (
    <article
      className={`border-gray-medium flex cursor-pointer items-center gap-4 border-b p-4 transition duration-200 ease-in-out sm:items-start ${
        isActive
          ? "bg-secondary-ultra-light"
          : "hover:bg-secondary-ultra-light bg-white"
      }`}
    >
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="size-12 rounded-sm object-cover"
      />
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm">{product.discountedPrice}</p>
      </div>
    </article>
  );
};

export default SearchResultsProduct;
