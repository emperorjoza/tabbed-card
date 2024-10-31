import React from 'react';
import { CardWrapper, CardHeader, CardBody } from './Card.styles';

const Card = ({ title, children }) => (
  <CardWrapper>
    <CardHeader>{title}</CardHeader>
    <CardBody>{children}</CardBody>
  </CardWrapper>
);

export default Card;
