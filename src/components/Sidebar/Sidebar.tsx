import React, { useState } from "react";
import { Folder, Plus } from "react-feather";
import "./Sidebar.scss";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {};

export default function Sidebar({}: Props) {
  const { projects, createProject } = useBoardContext();
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [projectName, setProjectName] = useState("");

  return (
    <div className="sidebar">
      <p>ALL BOARDS (2)</p>
      <ul className="sidebar-items">
        {projects.map((project) => (
          <li className="">
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
          <button>Create</button>
        </form>
      )}
    </div>
  );
}
