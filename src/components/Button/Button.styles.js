import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ primary }) => (primary ? 'white' : '#333')};
  background-color: ${({ primary }) => (primary ? '#007bff' : 'transparent')};
  border: ${({ primary }) => (primary ? 'none' : '2px solid #007bff')};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#007bff')};
    color: white;
  }
`;
