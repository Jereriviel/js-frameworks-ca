import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "meerkat | 404 - Not Found";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "404 - Page Not Found.");
    }
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 px-4">
      <div className="bg-primary-ultra-light border-primary-light flex flex-col justify-center gap-4 rounded-sm border px-4 py-8 sm:w-fit sm:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-primary-dark text-[88px] leading-none font-black sm:text-[102px]">
            404
          </h1>
          <p className="text-xl font-light uppercase sm:text-2xl">
            Page Not Found
          </p>
        </div>
        <p className="text-center text-lg font-light">
          The page you're looking for has been moved or does not exist.
        </p>
      </div>
      <a href="/" className="btn-primary btn-base">
        Back to products
      </a>
    </section>
  );
}

export default NotFoundPage;
