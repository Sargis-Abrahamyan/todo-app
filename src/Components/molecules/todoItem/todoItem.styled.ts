import styled from 'styled-components';

const commonStyles = `
display: flex;
align-items: center;
gap: 5px;
`;

export const TodoItemContainer = styled.section`
    max-width: 555px;
    height: 100%;
`;

export const TodoBlock = styled.ul`
    list-style-type: none;
`;

export const TodoItemWrapper = styled.div`
    width: 100%;
    max-width: 485px;
    border-bottom: 1px solid rgb(229, 228, 248);
    padding-bottom: 10px;
`;

export const Item = styled.li`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const LeftBlock = styled.div`
    ${commonStyles}
`;
export const IsComplitedInput = styled.input.attrs({ type: 'checkbox' })`
    width: 26px;
    height: 26px;
    border-radius: 2px;
    accent-color: var(--primary-color);
`;

export const ItemTitle = styled.span`
    color: var(--black-color);
    font: 500 1rem/100% Kanit;
    text-transform: uppercase;
`;

export const IsComplited = styled.del`
    color: rgba(37, 37, 37, 0.5);
`;

export const RightBlock = styled.div`
    ${commonStyles}
`;

export const Text = styled.span``;

export const DescriptionBlock = styled.div`
    font: 400 1.1rem/100% Kanit;
`;
