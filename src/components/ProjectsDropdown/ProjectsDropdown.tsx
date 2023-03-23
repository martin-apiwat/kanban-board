import React from "react";
import { X } from "react-feather";
import ProjectLinks from "../ProjectsLinks/ProjectLinks";
import "./ProjectsDropdown.scss";

type Props = {
    toggleShowProjectsDropdown: () => void;
};

export default function ProjectsDropdown({
    toggleShowProjectsDropdown,
}: Props) {
    return (
        <div className="model-container">
            <div className="model-card projects-dropdown">
                <div
                    className="model-close"
                    onClick={() => toggleShowProjectsDropdown()}
                >
                    <X />
                </div>
                <h3>All projects</h3>
                <ProjectLinks />
            </div>
        </div>
    );
}
