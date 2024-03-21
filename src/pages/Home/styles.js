import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 6.5625rem 8rem auto 4rem;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: 768px) {
    height: auto;

    grid-template-columns: 1fr;
    grid-template-rows: 6.5625rem 8rem auto;
    grid-template-areas:
      'header'
      'brand'
      'menu'
      'search'
      'content'
      'newnote';
  }
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-block-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 768px) {
    width: 100%;

    > h1 {
      width: 100%;
      text-align: left;
      padding-left: 1.5rem;
    }
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 4rem;
  text-align: center;

  > li {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding-top: 1.5rem;
    padding-inline: 1.5rem;
    list-style: none;

    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`

export const Search = styled.div`
  grid-area: search;

  padding: 4rem 4rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 0;
  }
`

export const Content = styled.div`
  grid-area: content;

  padding: 0 4rem;

  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 500;

  > svg {
    font-size: 0.875rem;
  }

  padding: 0.75rem 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`
