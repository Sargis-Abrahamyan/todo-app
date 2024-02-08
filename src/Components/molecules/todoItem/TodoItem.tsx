import React from 'react';
import Button from '../../atoms/Button/Button';
import { deleteIcon, editIcon, cancelIcon } from '../../../Constants/constant';
import { TodoItemProps } from './TodoItemProps';
import { useTodoItem } from './useTodoItem';
import * as Styled from './todoItem.styled';

const TodoItem: React.FC<TodoItemProps> = ({ handelEditItem, todo, editingItem }) => {
    const { handelDelete, handelToggleCompleted } = useTodoItem();
    const { id, title, description, completed, deadline } = todo;
    
    return (
        <Styled.TodoItemContainer>
            <Styled.TodoBlock>
                <Styled.TodoItemWrapper>
                    <Styled.Item>
                        <Styled.LeftBlock>
                            <Styled.IsComplitedInput
                                checked={completed}
                                onChange={() => handelToggleCompleted(id)}
                            />
                            <Styled.ItemTitle>
                                {completed ? (
                                    <Styled.IsComplited>
                                        {title} {deadline}
                                    </Styled.IsComplited>
                                ) : (
                                    <Styled.Text>
                                        {title} {deadline}
                                    </Styled.Text>
                                )}
                            </Styled.ItemTitle>
                        </Styled.LeftBlock>
                        <Styled.RightBlock>
                            <Button
                                imgSrc={editIcon}
                                imgAlt='editIcon'
                                width='35px'
                                onClick={() => handelEditItem(todo)}
                            />
                            <Button
                                imgSrc={editingItem?.id === id ? cancelIcon : deleteIcon}
                                imgAlt={editingItem?.id === id ? 'cancelIcon' : 'deleteIcon'}
                                width='35px'
                                onClick={() =>
                                    editingItem?.id === id ? handelEditItem(null) : handelDelete(id)
                                }
                            />
                        </Styled.RightBlock>
                    </Styled.Item>
                    <Styled.DescriptionBlock>{description}</Styled.DescriptionBlock>
                </Styled.TodoItemWrapper>
            </Styled.TodoBlock>
        </Styled.TodoItemContainer>
    );
};

export default TodoItem;
