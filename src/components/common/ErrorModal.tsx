import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

type Props = {
  isOpen: boolean;
  message: string;
  description: string;
  onClose: () => void;
};

function ErrorModal({ isOpen, message, description, onClose }: Props) {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-full items-center justify-center">
          <DialogPanel className="w-full max-w-md space-y-4 rounded-sm bg-white p-4 sm:p-8">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    className="iconify-[material-symbols--warning-outline-rounded]"
                  ></span>

                  <DialogTitle className="text-2xl font-bold">
                    Error
                  </DialogTitle>
                </div>

                <button className="btn-round btn-base" onClick={onClose}>
                  <span className="iconify-[material-symbols--close]"></span>
                </button>
              </div>
              <hr className="text-gray-medium" />
            </div>

            <div className="space-y-1 text-lg">
              <Description>{description}</Description>
              <p>{message}.</p>
            </div>
            <div className="flex w-full justify-end">
              <button className="btn-primary btn-base" onClick={onClose}>
                Ok
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default ErrorModal;
