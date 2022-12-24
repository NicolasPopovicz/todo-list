import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { ITask } from "./interfaces";

import Input from "./components/Input";
import Button from "./components/Button";
import ListTasks from "./components/ListTasks";
import HeadingOne from "./components/HeadingOne";
import MainWrapper from "./components/MainWrapper";
import Footer from "./components/Footer";

export default function App(): ReactElement {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleTask = (evt: ChangeEvent<HTMLInputElement>): void => setTask(evt.target.value);

  const removeTask = (taskId: number): void => setTodo(todo.filter(task => task.id !== taskId))

  const addTask = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (task === "") {
      alert("You need to insert a value!");
      return;
    }

    const newTask = {
      id: +(Math.random() * 1000).toFixed(0),
      description: task,
    };

    setTodo([...todo, newTask]);
    setTask("");
  }

  return (
    <MainWrapper>
      <HeadingOne>ToDo List {todo.length !== 0 ? `(${todo.length} ToDo's)` : ""}</HeadingOne>
      <section className="bg-[whitesmoke] p-4 rounded shadow-md flex flex-col items-center">

        <div className="mb-6 w-full">
          {todo.length === 0 && <p className="mb-2 px-4 py-2 border bg-green-200 text-green-700 shadow-sm font-semibold uppercase text-center">Wohoo, no tasks to do!</p>}
          {todo && (
            todo.map((task: ITask) => (
              <ListTasks key={task.id} task={task} removeTodo={removeTask} />
            ))
          )}
        </div>

        <form onSubmit={addTask}>
          <Input type="text" value={task} onChange={handleTask} />
          <Button typeButton="submit">Create</Button>
        </form>

      </section>

      <Footer />
    </MainWrapper>
  )
}
