import { useEffect } from "react";

function NoResultsPage() {
  useEffect(() => {
    document.title = "meerkat | No Results";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "No matching search results found.");
    }
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 px-4">
      <div className="bg-secondary-ultra-light border-secondary-light flex flex-col items-center justify-center gap-4 rounded-sm border px-4 py-8 sm:w-fit sm:px-8">
        <span className="iconify-[gg--search] text-secondary-dark h-14 w-14"></span>
        <p className="text-center text-lg font-light">
          Sorry, no matching results found.
        </p>
      </div>
      <a href="/" className="btn-primary">
        Back to products
      </a>
    </section>
  );
}

export default NoResultsPage;
