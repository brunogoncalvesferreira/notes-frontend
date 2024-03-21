import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 7.75rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
      margin-left: 20rem;
    }

    @media (max-width: 768px) {
      svg {
        margin-left: -6.2rem;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 21.25rem;
  margin: 1.875rem auto 0;
  padding-inline: 1.5rem;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: -7.75rem auto 3.75rem;
  width: 11.625rem;
  height: 11.625rem;

  > img {
    width: 11.625rem;
    height: 11.625rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > label {
    width: 2.5rem;
    height: 2.5rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
