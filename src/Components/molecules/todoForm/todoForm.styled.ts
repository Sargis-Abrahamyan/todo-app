import styled from 'styled-components';

const commonInputStyles = `
width:100%;
max-width:555px;
height:38px;
display: flex;
align-items: center;
padding: 8px 16px;
border: 1px solid var(--primary-color);
border-radius: 5px;
transition: .3s ease;
&:focus{
    background: #F2F2F2;
	border: 1px solid var(--primary-color);
	border-radius: 10px;
}
`;

export const TodoFormContainer = styled.article`
    width: calc(100% - 20px);
    max-width: 750px;
`;

export const Form = styled.form`
    max-width: 100%;
    margin-top: 1.5rem;
`;

export const FormHeader = styled.div`
    display: flex;
    gap: 1rem;
`;

export const FormBody = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Input = styled.input`
    ${commonInputStyles}

    &:nth-child(2) {
        max-width: 150px;
    }
`;

export const TextArea = styled.textarea`
    ${commonInputStyles}
    resize: none;
    height: 100px;
    margin: 0.7rem 0;
`;

export const ErrorMessage = styled.p`
    color: var(--error-message);
`;

export const InputGroup = styled.div`
    max-width: 320px;
    width: 100%;

    &:nth-child(2) {
        max-width: 150px;
    }
`;
