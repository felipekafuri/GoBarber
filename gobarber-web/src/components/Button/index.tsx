import React, { ButtonHTMLAttributes } from 'react';

import { Cotainer } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Cotainer {...rest}>{loading ? 'Carregando...' : children}</Cotainer>
);

export default Button;
