export interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleCreateTask: () => void;
}

export interface ITask {
  _id: string;
  task: string;
  completed: boolean;
}

export interface TaskProps {
  individualTask: ITask;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface IDeleteTaskRequestParams {
  params: {
    id: string;
  };
}
