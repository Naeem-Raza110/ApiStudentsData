import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="bg-white max-w-lg w-full rounded-2xl shadow-lg p-8 animate-fadeIn">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-white bg-blue-600 px-4 py-2 rounded-full mb-6 hover:bg-blue-700 transition"
      >
        ← Back
      </button>

      {/* User Name */}
      <h2 className="text-3xl font-extrabold mb-4 text-gray-800">{user.name}</h2>

      {/* Divider */}
      <hr className="border-gray-300 mb-6" />

      {/* User Details Grid */}
      <div className="grid grid-cols-1 gap-4 text-gray-700">
        <div className="flex justify-between">
          <span className="font-semibold">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Phone:</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Company:</span>
          <span>{user.company.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">City:</span>
          <span>{user.address.city}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Website:</span>
          <span className="text-blue-500 hover:underline">{user.website}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Username:</span>
          <span>{user.username}</span>
        </div>
      </div>
    </div>
  </div>
);

};

export default UserDetails;
