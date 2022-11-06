import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { ITask } from "./interfaces";
import ListTasks from "./components/ListTasks";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App(): ReactElement {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleTask = (evt: ChangeEvent<HTMLInputElement>): void => setTask(evt.target.value);

  const removeTask = (taskName: string): void => setTodo(todo.filter(task => task.description !== taskName));

  const addTask = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (task === "") {
      alert("Insira um valor!");
      return;
    }

    const newTask = {
      description: task,
    };

    setTodo([...todo, newTask]);
    setTask("");
  }

  return (
    <main className="container mx-auto flex flex-col items-center justify-center py-10 h-full">
      <h1 className="text-3xl uppercase font-semibold mb-5 text-teal-800">ToDo List App {todo.length !== 0 && todo.length}</h1>
      <section className="bg-[whitesmoke] p-4 rounded shadow-md flex flex-col items-center">

        <div className="mb-6 w-full">
          {todo.length === 0 && <p className="mb-2 px-4 py-2 border bg-green-200 text-green-700 shadow-sm font-semibold uppercase text-center">Wohoo, no tasks to do!</p>}
          {todo && (
            todo.map((task: ITask, index: number) => (
              <ListTasks key={index} task={task} removeTodo={removeTask} />
            ))
          )}
        </div>

        <form onSubmit={addTask}>
          <Input type="text" value={task} onChange={handleTask} />
          <Button typeButton="submit">Criar tarefa</Button>
        </form>

      </section>
    </main>
  )
}
