import { useState, useEffect } from 'react';
import { Todo } from '../../../global';
import { validate } from './validate';
import { TodoErrorProps } from './TodoFormProps';

export const useTodoForm = (
    initialValues: Todo,
    onSubmit: (data: Todo, editingItem: Todo | null) => void
) => {
    const [formData, setFormData] = useState<Todo>(initialValues);
    const [errors, setErrors] = useState<TodoErrorProps | null>({} as TodoErrorProps);

    const validationErrors = validate(formData);

    useEffect(() => {
        setFormData(initialValues);
    }, [initialValues]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else {
            onSubmit(formData, null); // Pass null for editingItem when adding a new item
            setFormData(initialValues);
            setErrors(null);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        errors
    };
};
