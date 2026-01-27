const Modal = ({ user, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center  bg-black/60"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] max-w-md rounded-xl bg-white  border bg-blark p-6
                   animate-[scaleIn_0.3s_ease]"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-2 cursor-pointer text-2xl "
        >
          ×
        </button>

        <h2 className="mb-2 text-xl font-bold ">
          {user.name}
        </h2>

        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>City: {user.address.city}</p>
      </div>
    </div>
  );
};

export default Modal;
