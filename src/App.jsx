import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import UserCard from "./components/UserCard";
import Modal from "./components/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen ">
      <Header />

      <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user, index) => (
          <UserCard
            key={user.id}
            user={user}
            index={index}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>

      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
