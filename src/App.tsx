import { useState } from "react";
import Board from "./components/Board/Board";
import CreateTaskModel from "./components/CreateTaskModel/CreateTaskModel";
import Navbar from "./components/Navbar/Navbar";
import ProjectsDropdown from "./components/ProjectsDropdown/ProjectsDropdown";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
    const [showCreateTast, setShowCreateTask] = useState(false);
    const [showProjectsDropdown, setShowProjectsDropDown] = useState(false);

    function toggleShowCreateTask() {
        setShowCreateTask(!showCreateTast);
    }

    function toggleShowProjectsDropdown() {
        setShowProjectsDropDown(!showProjectsDropdown);
    }

    return (
        <div className="app">
            <Navbar
                toggleShowCreateTask={toggleShowCreateTask}
                toggleShowProjectsDropdown={toggleShowProjectsDropdown}
            />
            <div className="main-container">
                <Sidebar />
                <Board />
            </div>
            {showCreateTast && (
                <CreateTaskModel toggleShowCreateTask={toggleShowCreateTask} />
            )}
            {showProjectsDropdown && (
                <ProjectsDropdown
                    toggleShowProjectsDropdown={toggleShowProjectsDropdown}
                />
            )}
        </div>
    );
}
