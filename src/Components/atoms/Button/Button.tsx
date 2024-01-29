import React from 'react';
import { ButtonProps } from './interface';
import { SharedButton, Image, ButtonText } from './button.styled';

const Button: React.FC<ButtonProps> = ({
    text,
    width,
    height,
    background,
    color,
    imgSrc,
    imgAlt,
    onClick
}) => {
    return (
        <SharedButton
            $width={width}
            $height={height}
            $color={color}
            $background={background}
            onClick={onClick}
        >
            {text && <ButtonText>{text}</ButtonText>}
            {imgSrc && <Image src={imgSrc} alt={imgAlt} />}
        </SharedButton>
    );
};

export default Button;
