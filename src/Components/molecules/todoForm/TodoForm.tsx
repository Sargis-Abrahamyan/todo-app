import {memo} from 'react';
import { TodoFormProps } from './TodoFormProps';
import { useTodoForm } from './useTodoForm';
import Button from '../../atoms/Button/Button';
import * as Styled from './todoForm.styled';

const TodoForm: React.FC<TodoFormProps> = ({ initialValues, onSubmit, buttonText }) => {
    const { formData, handleSubmit, handleChange, errors } = useTodoForm(initialValues, onSubmit);
    const { title, deadline, description } = formData;

    return (
        <Styled.TodoFormContainer>
            <Styled.Form onSubmit={handleSubmit}>
                <Styled.FormHeader>
                    <Styled.InputGroup>
                        <Styled.Input
                            type='text'
                            name='title'
                            placeholder='Search note...'
                            value={title || ''}
                            onChange={handleChange}
                        />
                        <Styled.ErrorMessage>{errors?.title}</Styled.ErrorMessage>
                    </Styled.InputGroup>
                    <Styled.InputGroup>
                        <Styled.Input
                            type='date'
                            name='deadline'
                            value={deadline || ''}
                            onChange={handleChange}
                        />
                        <Styled.ErrorMessage>{errors?.title}</Styled.ErrorMessage>
                    </Styled.InputGroup>
                </Styled.FormHeader>
                <Styled.FormBody>
                    <Styled.InputGroup>
                        <Styled.TextArea
                            name='description'
                            placeholder='Description'
                            value={description || ''}
                            onChange={handleChange}
                        />
                        <Styled.ErrorMessage>{errors?.title}</Styled.ErrorMessage>
                    </Styled.InputGroup>

                    <Button text={buttonText} width='150px' height='45px' background='#6c63ff' />
                </Styled.FormBody>
            </Styled.Form>
        </Styled.TodoFormContainer>
    );
};

export default memo(TodoForm);
