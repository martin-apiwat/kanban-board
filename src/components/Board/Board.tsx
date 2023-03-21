import Ticket from "../Ticket/Ticket";
import "./Board.scss";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {};

export default function Board({}: Props) {
  const { currentProject } = useBoardContext();

  return (
    <div className="board">
      {currentProject.board.map((column) => (
        <div className="board-column">
          <div className="board-title">
            <div className="board-title-icon todo"></div>
            <h4 className="">Todo</h4>
          </div>

          {column.tickets.map((ticket) => (
            <Ticket />
          ))}
        </div>
      ))}
    </div>
  );
}
