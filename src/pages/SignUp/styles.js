import styled from 'styled-components'
import backgroundImg from '../../assets/avatar_placeholder.svg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 1.5rem;
    margin-top: 5.25rem;
    margin-bottom: 1.5rem;
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 7.25rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  opacity: 0.8;

  @media (max-width: 768px) {
    display: none;
  }
`
