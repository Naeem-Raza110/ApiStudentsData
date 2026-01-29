import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
