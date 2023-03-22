import React, { useState } from "react";
import { Folder, Plus } from "react-feather";
import "./Sidebar.scss";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {};

export default function Sidebar({}: Props) {
  const { projects, createProject, currentProject, changeBoard } =
    useBoardContext();
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [projectName, setProjectName] = useState("");

  return (
    <div className="sidebar">
      <p>ALL BOARDS (2)</p>
      <ul className="sidebar-items">
        {projects.map((project, index) => (
          <li
            className={project.id === currentProject.id ? "active" : ""}
            onClick={() => changeBoard(index)}
          >
            <Folder />
            {project.name}
          </li>
        ))}

        <li onClick={() => setShowCreateProject(!showCreateProject)}>
          <Plus />
          Create board
        </li>
      </ul>
      {showCreateProject && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProject(projectName);
            setProjectName("");
            setShowCreateProject(false);
          }}
        >
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button className="btn">Create</button>
        </form>
      )}
    </div>
  );
}
