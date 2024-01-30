import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.BACKGROUND_900};

  height: 3.5rem;
  border: 0;
  padding: 0 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  font-weight: 700;

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }
`
