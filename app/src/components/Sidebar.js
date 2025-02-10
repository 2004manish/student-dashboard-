import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div style={{ width: "250px", background: "#333", color: "#fff", padding: "20px" }}>
      <h3>Dashboard</h3>
      <button onClick={() => navigate("/dashboard")}>Students</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
