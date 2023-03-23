import "./Sidebar.scss";
import { useBoardContext } from "../../context/BoardsContext";
import ProjectLinks from "../ProjectsLinks/ProjectLinks";

type Props = {};

export default function Sidebar() {
    const { projects } = useBoardContext();

    return (
        <div className="sidebar">
            <p>ALL BOARDS ({projects.length})</p>
            <ProjectLinks />
        </div>
    );
}
