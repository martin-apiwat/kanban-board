import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Project {
  name: string;
  id: string;
}

interface Context {
  projects: Project[];
  createProject: (name: string) => void;
  currentProject: Project;
  changeBoard: (index: number) => void;
}

const BoardsContext = createContext<Context>({
  projects: [],
  createProject: () => {},
  currentProject: {} as Project,
  changeBoard: () => {},
});

export function useBoardContext() {
  return useContext(BoardsContext);
}

type Props = {
  children: React.ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project[]>([
    { name: "hej", id: uuidv4() },
    { name: "då", id: uuidv4() },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentProject = projects[selectedIndex];

  function createProject(name: string) {
    setProjects([...projects, { name, id: uuidv4() }]);
    changeBoard(projects.length);
  }

  function changeBoard(index: number) {
    setSelectedIndex(index);
  }

  return (
    <BoardsContext.Provider
      value={{ projects, createProject, currentProject, changeBoard }}
    >
      {children}
    </BoardsContext.Provider>
  );
}
