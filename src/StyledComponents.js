// src/StyledComponents.js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3b82f6; /* Blue background */
  color: white; /* White text */
  padding: 0.5rem 1rem; /* Padding */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth background transition */

  &:hover {
    background-color: #2563eb; /* Darker blue on hover */
  }
`;

export const Card = styled.div`
  max-width: 300px; /* Maximum width */
  background: white; /* White background */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow */
  padding: 1rem; /* Padding */
  margin: 1rem; /* Margin */
`;
