import showSuccessToast from "./Toast";

type RemoveButtonProps = {
  onClick: () => void;
  list: string;
};

const RemoveButton = ({ onClick, list }: RemoveButtonProps) => {
  const handleClick = () => {
    onClick();
    showSuccessToast(`Item removed from ${list}`);
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-dark hover:bg-secondary-ultra-light flex size-12 items-center justify-center rounded-full hover:text-black"
    >
      <span className="iconify-[material-symbols--delete-outline]"></span>
    </button>
  );
};

export default RemoveButton;
