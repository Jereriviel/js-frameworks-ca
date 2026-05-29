import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import type { Product } from "../types/Product";
import BreadCrumb from "../components/common/BreadCrumb";
import Rating from "../components/product/Rating";
import ProductReview from "../components/product/ProductReviews";
import Tag from "../components/common/Tag";
import DiscountBadge from "../components/product/DiscountBadge";
import AddToCartButton from "../components/product/AddToCartButton";
import ErrorModal from "../components/common/ErrorModal";
import ProductDetailsSkeleton from "../components/product/ProductDetailsSkeleton";
import AddFavouriteButton from "../components/favourites/AddFavouriteButton";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useProduct(id!);

  const product: Product | undefined = data?.data;

  const errorMessage =
    error instanceof Error ? error.message : "Failed to load product";

  if (isError) {
    return (
      <ErrorModal
        isOpen={true}
        message={errorMessage}
        description="Failed to load product."
        onClose={() => navigate("/")}
      />
    );
  }

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) return <p>Product not found.</p>;

  const hasDiscount = product.discountedPrice < product.price;
  const numberOfRatings = product.reviews.length;

  return (
    <>
      {!isError && product && (
        <div className="flex-start flex w-full flex-col p-4 sm:p-0 md:pb-8">
          <section>
            <BreadCrumb product={product} />
          </section>

          <section className="flex flex-col py-4 md:flex-row md:gap-8">
            <div className="relative">
              <DiscountBadge size="large" product={product} />
              <img
                src={product.image.url}
                alt={product.image.alt}
                className="aspect-4/3 w-full max-w-145 rounded-sm object-cover"
              />
            </div>
            <div className="flex w-full max-w-145 flex-col gap-4 py-8 md:py-0">
              <div className="flex justify-between">
                <h1 className="truncate text-3xl font-semibold md:text-4xl">
                  {product.title}
                </h1>
                <div className="relative w-14">
                  <AddFavouriteButton product={product} />
                </div>
              </div>

              <div className="flex gap-2">
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
              <div className="flex flex-col gap-1 sm:gap-2">
                {hasDiscount ? (
                  <>
                    <p className="text-2xl font-semibold md:text-3xl">
                      {product.discountedPrice} NOK
                    </p>
                    <div className="text-gray-dark flex flex-row gap-2 md:text-lg">
                      <p>Former Price:</p>
                      <s>{product.price} NOK</s>
                    </div>
                  </>
                ) : (
                  <p className="text-2xl font-semibold md:text-3xl">
                    {product.price} NOK
                  </p>
                )}
              </div>
              <p className="md:text-lg">{product.description}</p>
              <div>
                {product.tags.length === 0 ? (
                  <p>No tags</p>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {product.tags.map((tag) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                  </div>
                )}
              </div>
              <div className="py-4">
                <AddToCartButton product={product} size="medium" />
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-2 md:pt-8">
            <h2 className="text-2xl font-semibold">Customer Reviews</h2>

            <section className="flex flex-col gap-4 py-4">
              {product.reviews.length === 0 ? (
                <p>No reviews yet.</p>
              ) : (
                product.reviews.map((review) => (
                  <ProductReview key={review.id} review={review} />
                ))
              )}
            </section>
          </section>
        </div>
      )}
    </>
  );
}

export default ProductDetailsPage;
