import React from "react";
import { ChevronDown, Menu } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";
import "./Navbar.scss";

type Props = {
    toggleShowCreateTask: () => void;
    toggleShowProjectsDropdown: () => void;
};

export default function Navbar({
    toggleShowCreateTask,
    toggleShowProjectsDropdown,
}: Props) {
    const { currentProject } = useBoardContext();

    return (
        <div className="navbar">
            <div className="navbar-logo-container">
                <h1>Kanban</h1>
            </div>
            <div className="navbar-main-container">
                <div
                    className="navbar-dropdown"
                    onClick={() => toggleShowProjectsDropdown()}
                >
                    <h4>{currentProject.name}</h4>
                    <ChevronDown />
                </div>
                <button className="btn" onClick={() => toggleShowCreateTask()}>
                    Add new ticket
                </button>
            </div>
        </div>
    );
}
