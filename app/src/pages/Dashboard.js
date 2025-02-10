import React from "react";
import Sidebar from "../components/Sidebar";
import StudentsTable from "../components/StudentsTable";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Students List</h2>
        <StudentsTable />
      </div>
    </div>
  );
};

export default Dashboard;
