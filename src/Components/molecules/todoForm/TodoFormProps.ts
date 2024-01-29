import { Todo } from '../../../global';

export interface TodoFormProps {
    initialValues: Todo;
    buttonText?: string;
    onSubmit: (data: Todo, editingItem: Todo | null) => void;
}

export interface TodoErrorProps {
    title?: string;
    deadline?: string;
    description?: string;
}
