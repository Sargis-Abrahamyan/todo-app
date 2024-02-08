import { useState, useCallback } from 'react';
import { Todo } from '../../../global';
import { useAppDispatch, useAppSelector } from '../../../Hooks';
import { addTodo, updateTodo, setFilterCompleted } from '../../../Store/todoSlice';

const initialValues: Todo = {
    id: '',
    title: '',
    deadline: '',
    description: '',
    completed: false
};

export const useTodo = () => {
    const [editingItem, setEditingItem] = useState<Todo | null>(null);
    const dispatch = useAppDispatch();

    const todos = useAppSelector((state) => {
        const { todoS, filterCompleted } = state.todos;

        switch (filterCompleted) {
            case 'completed':
                return todoS.filter((todo) => todo.completed);
            case 'incomplete':
                return todoS.filter((todo) => !todo.completed);
            default:
                return todoS;
        }
    });

    const handleFilterChange = useCallback((filter: 'all' | 'completed' | 'incomplete') => {
        dispatch(setFilterCompleted(filter)); //filter todos completed
    }, [dispatch]);

    const handelAddTodos = useCallback((data: Todo): void => {
        dispatch(addTodo(data)); //Add  todo Data
        setEditingItem(null); // Reset the editingItem after adding
    }, [dispatch]);

    const handleUpdateItem = useCallback((data: Todo) => {
        dispatch(updateTodo({ updatedTodo: data, editingItem })); //update  todo Data
        setEditingItem(null);
    }, [dispatch, editingItem]);

    const handelEditItem = useCallback((todoItem: Todo | null) => {
        setEditingItem(todoItem); //set Editing Item
    }, []);

    return {
        initialValues,
        handelAddTodos,
        handelEditItem,
        handleUpdateItem,
        editingItem,
        handleFilterChange,
        todos
    };
};
