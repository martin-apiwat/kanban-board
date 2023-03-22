import { useState } from "react";
import Board from "./components/Board/Board";
import CreateTaskModel from "./components/CreateTaskModel/CreateTaskModel";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [showCreateTast, setShowCreateTask] = useState(false);

  function toggleShowCreateTask() {
    setShowCreateTask(!showCreateTast);
  }

  return (
    <div className="app">
      <Navbar toggleShowCreateTask={toggleShowCreateTask} />
      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTast && (
        <CreateTaskModel toggleShowCreateTask={toggleShowCreateTask} />
      )}
    </div>
  );
}
