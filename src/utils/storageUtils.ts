import { Todo } from '../global';

export const loadTodosFromLocalStorage = (): Todo[] => {
    const todosJson = localStorage.getItem('todos');
    return todosJson ? JSON.parse(todosJson) : [];
};

export const saveTodosToLocalStorage = (todos: Todo[]): void => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
