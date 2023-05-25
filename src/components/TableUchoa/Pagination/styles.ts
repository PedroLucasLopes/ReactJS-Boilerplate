import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  left: 0;

  width: 100%;
  margin: 1rem 0 0.25rem;

  display: flex;
  align-items: center;

  font-size: 1.5rem;

  user-select: none;
`

export const Total = styled.span`
  color: black;
  user-select: text;
  margin-right: auto;
`

export const NeighborPage = styled.span`
  cursor: pointer;

  min-width: 4rem;
  height: 4rem;
  margin: 0 0.25rem;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  text-align: center;
  border-radius: 2px;

  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #f2f3f5;
  }
`

export const CurrentPage = styled.span`
  min-width: 4rem;
  height: 4rem;
  margin: 0 0.25rem;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  text-align: center;
  background-color: #2b6cb0;
  border-radius: 2px;
`

export const Ellipsis = styled.span`
  width: 4rem;
  height: 4rem;
  margin: 0 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  text-align: center;
`
