const UserCard = ({ user, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ animationDelay: `${index * 150}ms` }}
      className="cursor-pointer rounded-xl p-5 border opacity-0
                 animate-[fadeUp_0.6s_ease_forwards]
                 hover:scale-105  transition"
    >
      <h3 className="text-lg font-semibold ">
        {user.name}
      </h3>
      <p className="text-sm text-gray-400">{user.email}</p>
    </div>
  );
};

export default UserCard;
