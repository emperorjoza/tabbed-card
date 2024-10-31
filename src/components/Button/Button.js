import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, primary, onClick }) => (
  <StyledButton primary={primary} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
