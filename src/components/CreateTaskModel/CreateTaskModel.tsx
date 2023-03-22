import React, { useState } from "react";
import "./CreateTaskModel.scss";
import { X } from "react-feather";

type Props = {
    toggleShowCreateTask: () => void;
};

export default function CreateTaskModel({ toggleShowCreateTask }: Props) {
    const [subtasks, setSubtasks] = useState([""]);

    return (
        <div className="model-container">
            <div className="model-card">
                <div
                    className="model-close"
                    onClick={() => toggleShowCreateTask()}
                >
                    <X />
                </div>
                <h3 className="model-title">Create new ticket</h3>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Title name" />

                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Description..." />

                <label>Subtask</label>
                {subtasks.map((task, index) => (
                    <div className="subtask-container">
                        <input type="text" placeholder="Subtask" />
                        <X
                            onClick={() => {
                                subtasks.splice(index, 1);
                                setSubtasks([...subtasks]);
                            }}
                        />
                    </div>
                ))}

                <button
                    className="btn"
                    onClick={() => setSubtasks([...subtasks, ""])}
                >
                    + Add new task
                </button>
                <button className="btn">Create ticket</button>
            </div>
        </div>
    );
}
