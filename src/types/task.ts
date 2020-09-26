export enum TaskStatus {
  ACTIVE = 1,
  COMPLETED
};

export type TaskFilterStatus = TaskStatus | 0;

export interface ITask {
  id: number,
  status: TaskStatus,
  title: string,
  description?: string
};

export type EditableTask = ITask | null;