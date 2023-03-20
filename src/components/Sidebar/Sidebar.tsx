import React from "react";
import { Folder, Plus } from "react-feather";
import "./Sidebar.scss";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {};

export default function Sidebar({}: Props) {
  const boards = useBoardContext();
  console.log(boards);
  return (
    <div className="sidebar">
      <p>ALL BOARDS (2)</p>
      <ul className="sidebar-items">
        <li className="active">
          <Folder />
          Place board
        </li>

        <li>
          <Folder />
          Place board
        </li>
        <li>
          <Plus />
          Create board
        </li>
      </ul>
    </div>
  );
}
