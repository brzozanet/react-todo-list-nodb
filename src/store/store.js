import { nanoid } from "nanoid";
import { create } from "zustand";

const todosDatabase = [
  {
    id: nanoid(),
    task: "Skończyć kurs React",
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Dopieścić projekt Kapu$ta",
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Zaktualizować CV",
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Zrobić nowe portfolio website",
    isDone: false,
  },
];

const useStore = create((set) => ({
  todos: todosDatabase,
  appTitle: "Do zrobienia",
  addTodo: (newTask) =>
    set((state) => ({
      todos: [
        {
          id: nanoid(),
          task: newTask,
          isDone: false,
          isEdited: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        ...state.todos,
      ],
    })),
  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
  toggleTaskEdit: (todoId) =>
    set((state) => ({
      //NOTE: to do it
      todos: state.todos.map(todo),
    })),
  editTodo: (todoId, editedTask) =>
    set((state) => ({
      todos: state.tods.map((todo) =>
        todo.id === todoId
          ? { ...todo, task: editedTask, updatedAt: Date.now() }
          : todo
      ),
    })),
  markAsDone: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, isDone: true, updatedAt: Date.now() }
          : todo
      ),
    })),
}));

export default useStore;
