import { ReactElement } from "react";
import { ITask } from "../interfaces";

interface IListTasks {
  task: ITask,
  removeTodo(taskId: number): void
}

export default function ListTasks({ task, removeTodo }: IListTasks): ReactElement {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-orange-200 text-orange-800 font-semibold px-4 py-2 mb-1 border shadow-sm">
      <p>{task.description}</p> <span onClick={() => removeTodo(task.id)} className="text-2xl cursor-pointer hover:text-red-500 transition-all duration-100">&times;</span>
    </div>
  )
}
