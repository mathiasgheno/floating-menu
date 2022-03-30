import React from "react";
import styled from "styled-components";

function Menu() {
  return (
    <nav>
      <List>
        <li>
          <Link href="/profile">Visit Profile</Link>
        </li>
        <li>
          <Link href="/profile/edit">Edit</Link>
        </li>
        <li>
          <Link href="/profile/delete">Delete Account</Link>
        </li>
      </List>
    </nav>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 0;
  list-style-type: none;
  min-width: 150px;
  width: fit-content;
  background: black;
`;

const Link = styled.a`
  display: block;
  padding: 8px;
  color: white;
  font-weight: 500;
  text-decoration: none;
`;

export default Menu;
