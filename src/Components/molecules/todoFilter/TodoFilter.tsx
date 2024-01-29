import React from 'react';
import Button from '../../atoms/Button/Button';
import { TodoFilterProps } from './TodoFilterProps';
import { FilterBlock } from './todoFilter.styled';

const TodoFilter: React.FC<TodoFilterProps> = ({ handleFilterChange }) => {
    return (
        <FilterBlock>
            <Button
                text='all'
                width='125px'
                background='#6c63ff'
                onClick={() => handleFilterChange('all')}
            />
            <Button
                text='completed'
                width='125px'
                background='#6c63ff'
                onClick={() => handleFilterChange('completed')}
            />
            <Button
                text='incomplete'
                width='125px'
                background='#6c63ff'
                onClick={() => handleFilterChange('incomplete')}
            />
        </FilterBlock>
    );
};

export default TodoFilter;
