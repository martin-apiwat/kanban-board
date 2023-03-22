import React from "react";
import "./CreateTaskModel.scss";
import { X } from "react-feather";

type Props = {
  toggleShowCreateTask: () => void;
};

export default function CreateTaskModel({ toggleShowCreateTask }: Props) {
  return (
    <div className="model-container">
      <div className="model-card">
        <div className="model-close" onClick={() => toggleShowCreateTask()}>
          <X />
        </div>
        <h3 className="model-title">Create new ticket</h3>
      </div>
    </div>
  );
}
