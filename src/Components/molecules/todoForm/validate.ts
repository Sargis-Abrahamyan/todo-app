import { Todo } from '../../../global';
import { TodoErrorProps } from './TodoFormProps';

export const validate = (formData: Todo) => {
    const validationErrors: TodoErrorProps = {
        
    };
    const { title, deadline, description } = formData;

    if (!title.trim()) {
        validationErrors.title = 'Title is required';
    }

    if (!deadline.trim()) {
        validationErrors.deadline = 'Deadline is required';
    }

    if (!description.trim()) {
        validationErrors.description = 'Description is required';
    }

    return validationErrors;
};
