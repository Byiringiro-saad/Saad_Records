import { Routes, Route } from "react-router-dom";

// pages
import Login from "./pages/login";
import Signup from "./pages/signup";
import Users from "./pages/admin/users";
import Admin from "./pages/admin/admin";
import Audios from "./pages/admin/audios";
import Validator from "./pages/validator";
import Contributor from "./pages/contributor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="admin" element={<Admin />}>
        <Route path="users" element={<Users />} />
        <Route path="audios" element={<Audios />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="validator" element={<Validator />} />
      <Route path="contributor" element={<Contributor />} />
    </Routes>
  );
}

export default App;
