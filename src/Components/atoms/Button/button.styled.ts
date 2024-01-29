import styled from 'styled-components';

interface styledButtonProps {
    $width?: string;
    $height?: string;
    $background?: string;
    $color?: string;
}

export const SharedButton = styled.button<styledButtonProps>`
    width: ${({ $width }) => ($width ? $width : '97px')};
    height: ${({ $height }) => ($height ? $height : '38px')};
    background-color: ${({ $background }) => ($background ? $background : 'transparent')};
    color: ${({ $color }) => ($color ? $color : 'var(--secondary-color)')};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all.5s ease;
    &:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
    }
`;

export const ButtonText = styled.span`
    font: 500 1rem/100% Kanit;
    text-transform: uppercase;
`;

export const Image = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`;
