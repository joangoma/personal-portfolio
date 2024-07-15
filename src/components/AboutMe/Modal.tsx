interface ModalProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">More Information</h2>
        <p className="text-gray-700 mb-4">
          Here is some more information that you can see when you click the
          "View More" button.
        </p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
