import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 0;
  list-style-type: none;
  min-width: 150px;
  width: 100%;
  background: black;
`;

export const Link = styled.a`
  display: block;
  padding: 8px;
  color: white;
  font-weight: 500;
  text-decoration: none;
`;
