type PaginationProps = {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
};

const Pagination = ({
  page,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <button
        className="btn-round btn-base disabled:text-gray-medium"
        disabled={page === 1}
        onClick={onPrevious}
      >
        <span className="iconify-[material-symbols--arrow-back-ios-new]"></span>
      </button>

      <div className="flex gap-1">
        <p>Page</p>
        <span>{page}</span>
        <p>of</p>
        <span>{totalPages}</span>
      </div>

      <button
        className="btn-round btn-base disabled:text-gray-medium"
        disabled={page === totalPages}
        onClick={onNext}
      >
        <span className="iconify-[material-symbols--arrow-forward-ios]"></span>
      </button>
    </div>
  );
};

export default Pagination;
