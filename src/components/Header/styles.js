import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 6.5625rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5rem;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 1rem;

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const ButtonLogout = styled.button`
  border: 0;
  background-color: transparent;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1.5rem;
  }
`
