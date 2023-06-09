import React, { useState } from "react";
import { Ticket as TicketType } from "../../context/projectsData";
import "./Ticket.scss";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";

type Props = {
    ticket: TicketType;
    provided: DraggableProvided;
    snapshot: DraggableStateSnapshot;
};

export default function Ticket({ ticket, provided, snapshot }: Props) {
    const [showSubtask, setShowSubtask] = useState(false);

    return (
        <div
            className="ticket"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            // @ts-ignore
            active={snapshot.isDragging.toString()}
            onClick={() => setShowSubtask(!showSubtask)}
        >
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>{ticket.tasks.length}</p>
            {showSubtask && (
                <ul>
                    {ticket.tasks.map((task) => (
                        <li>{task}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
