import React, { ButtonHTMLAttributes } from 'react';

import { Cotainer } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Cotainer {...rest}>{children}</Cotainer>
);

export default Button;
