import { useState } from "react";
import { Folder, Plus } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";
import "./ProjectLinks.scss";

export default function ProjectLinks() {
    const { projects, createProject, currentProject, changeBoard } =
        useBoardContext();
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [projectName, setProjectName] = useState("");

    return (
        <div className="projects-links">
            <ul className="sidebar-items">
                {projects.map((project, index) => (
                    <li
                        className={
                            project.id === currentProject.id ? "active" : ""
                        }
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
                    <button className="btn" disabled={!projectName}>
                        Create
                    </button>
                </form>
            )}
        </div>
    );
}
