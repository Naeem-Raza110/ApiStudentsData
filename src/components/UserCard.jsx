import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/user/${user.id}`)}
      className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
    >
      {/* Name */}
      <h3 className="text-2xl font-extrabold text-gray-800 mb-2">{user.name}</h3>

      {/* Details */}
      <p className="text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
      <p className="text-gray-700"><span className="font-semibold">Phone:</span> {user.phone}</p>
      <p className="text-gray-700"><span className="font-semibold">Company:</span> {user.company.name}</p>
    </div>
  );
};

export default UserCard;
