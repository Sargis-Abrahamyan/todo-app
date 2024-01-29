import { Todo } from '../../../global';

export interface TodoItemProps {
    handelEditItem: (todoItem: Todo | null) => void;
    todo: Todo;
    editingItem: Todo | null;
}
