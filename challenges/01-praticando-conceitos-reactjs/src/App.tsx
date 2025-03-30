import { Check, PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import "./global.css";

import clipboardImg from "./assets/clipboard.svg";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: newTask, completed: false },
    ]);
    setNewTask("");
  }

  function completeTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.taskListContainer}>
          <div className={styles.taskListHeader}>
            <div className={styles.createdTasksCounter}>
              <div>Tarefas criadas</div>
              <div className={styles.counter}>{tasks.length}</div>
            </div>

            <div className={styles.finishedTasksCounter}>
              <div>Concluídas</div>
              <div className={styles.counter}>
                {tasks.length > 0
                  ? `${tasks.filter((t) => t.completed).length} de ${
                      tasks.length
                    }`
                  : 0}
              </div>
            </div>
          </div>

          {tasks.length === 0 ? (
            <div className={styles.emptyTaskList}>
              <img src={clipboardImg} />
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefa e organize seus itens a fazer</span>
              </div>
            </div>
          ) : (
            <div className={styles.taskList}>
              {tasks.map((task) => (
                <div key={task.id} className={styles.task}>
                  <div className={styles.taskTitle}>
                    {task.completed ? (
                      <button
                        onClick={() => completeTask(task.id)}
                        className={styles.taskCheckboxChecked}
                      >
                        <Check size={12} weight="bold" />
                      </button>
                    ) : (
                      <button
                        onClick={() => completeTask(task.id)}
                        className={styles.taskCheckboxUnchecked}
                      />
                    )}
                    <span className={task.completed ? styles.taskFinished : ""}>
                      {task.title}
                    </span>
                  </div>
                  <button onClick={() => deleteTask(task.id)}>
                    <Trash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
