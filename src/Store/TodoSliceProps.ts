import { Todo } from '../global';

export interface InitialState {
    todoS: Todo[];
    filterCompleted: 'all' | 'completed' | 'incomplete';
}

export interface UpdateTodoPayload {
    updatedTodo: Todo;
    editingItem: Todo | null;
}
