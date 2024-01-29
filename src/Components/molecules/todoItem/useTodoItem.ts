import { useAppDispatch } from '../../../Hooks/useAppDispatch';
import { deleteTodo, toggleCompleted } from '../../../Store/todoSlice';

export const useTodoItem = () => {
    const dispatch = useAppDispatch();

    const handelToggleCompleted = (id: string) => {
        dispatch(toggleCompleted(id));
    };

    const handelDelete = (id: string) => {
        dispatch(deleteTodo(id));
    };

    return {
        handelDelete,
        handelToggleCompleted
    };
};
