import React from 'react';
import { TodoFilter, TodoForm, TodoItem } from '../../molecules';
import { useTodo } from './useTodoProps';
import { TodoListContainer } from './todo.styled';

const Todo: React.FC = () => {
    const {
        initialValues,
        handelEditItem,
        handleUpdateItem,
        handelAddTodos,
        editingItem,
        handleFilterChange,
        todos
    } = useTodo();

    return (
        <TodoListContainer>
            <TodoFilter handleFilterChange={handleFilterChange} />
            <TodoForm
                initialValues={editingItem || initialValues}
                onSubmit={editingItem ? handleUpdateItem : handelAddTodos}
                buttonText={editingItem ? 'Update Item' : 'Add Item'}
            />
            {todos.length !== 0 &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handelEditItem={handelEditItem}
                        editingItem={editingItem}
                    />
                ))}
        </TodoListContainer>
    );
};

export default Todo;
