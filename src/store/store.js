import { nanoid } from "nanoid";
import { create } from "zustand";

const todosDatabase = [
  {
    id: nanoid(),
    task: "Skończyć kurs React",
    isEdited: false,
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Dopieścić projekt Kapu$ta",
    isEdited: false,
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Zaktualizować CV",
    isEdited: false,
    isDone: false,
  },
  {
    id: nanoid(),
    task: "Zrobić nowe portfolio website",
    isEdited: false,
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
      todos: state.todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, isEdited: !todo.isEdited }
          : { ...todo, isEdited: false }
      ),
    })),
  editTodo: (todoId, editedTask) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              task: editedTask,
              updatedAt: Date.now(),
              isEdited: false,
            }
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
