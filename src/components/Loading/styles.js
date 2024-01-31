import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    width: 1rem;
    height: 1rem;

    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.COLORS.GRAY_200};

    border-right-color: transparent;

    animation: spin 1s ease-in-out infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
      from {
        transform: rotate(0deg);
      }
    }
  }
`
