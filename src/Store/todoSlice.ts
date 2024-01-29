import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../global';
import { InitialState, UpdateTodoPayload } from './TodoSliceProps';
import { loadTodosFromLocalStorage, saveTodosToLocalStorage } from '../utils/storageUtils';

const initialState = {
    todoS: loadTodosFromLocalStorage(),
    filterCompleted: 'all'
} as InitialState;

export const todoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }: PayloadAction<Todo>) => {
            const { title, deadline, description, completed } = payload;
            const newTodo = {
                id: uuidv4(),
                title,
                deadline,
                description,
                completed
            };
            state.todoS.push(newTodo);
            saveTodosToLocalStorage(state.todoS);
        },
        deleteTodo: (state, { payload }: PayloadAction<string>) => {
            state.todoS = state.todoS.filter((todo) => todo.id !== payload);
            saveTodosToLocalStorage(state.todoS);
        },
        updateTodo: (state, { payload }: PayloadAction<UpdateTodoPayload>) => {
            const { editingItem, updatedTodo } = payload;
            const index = state.todoS.findIndex((todo) => todo.id === editingItem?.id);
            if (index !== -1) {
                state.todoS[index] = updatedTodo;
            }
            saveTodosToLocalStorage(state.todoS);
        },
        toggleCompleted: (state, { payload }: PayloadAction<string>) => {
            const todo = state.todoS.find((todo) => todo.id === payload);
            if (todo) {
                todo.completed = !todo.completed;
                saveTodosToLocalStorage(state.todoS);
            }
        },
        setFilterCompleted: (
            state,
            { payload }: PayloadAction<'all' | 'completed' | 'incomplete'>
        ) => {
            state.filterCompleted = payload;
            saveTodosToLocalStorage(state.todoS);
        }
    }
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, toggleCompleted, setFilterCompleted } =
    todoSlice.actions;
