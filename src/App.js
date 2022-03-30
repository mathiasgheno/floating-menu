import React from "react";
import "./styles.css";
import './reset.css';
import styled from "styled-components";
import { ProfileFloatingMenu } from "./ProfileFloatingMenu/ProfileFloatingMenu";

const Navegation = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #232F3E;
  min-height: 50px;
  padding: 0 20px;
`;

const ColumnNav = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-content: ${({right}) => right ? 'flex-end' : 'flex-start'};
  column-gap: 15px;
  align-items: center;
`;

export default function App() {
  return (
    <div className="App">
      <Navegation>
        <ColumnNav>
          <a href=''>AWS</a>
          <button>Services</button>
          <div>
            <input type="text" placeholder="Search for services"/>
          </div>
        </ColumnNav>
        <ColumnNav right >
          <ProfileFloatingMenu />
        </ColumnNav>
      </Navegation>
    </div>
  );
}
