import Profile from "../Profile/Profile";
import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid red;
`;

const AnimatedFloating = keyframes`
  from {
    //transform: translateY(0%);
    transform: translateY(0%) scale(0.1);
  }
  to {
    transform: translateY(100%) scale(1);
  }
`;

const ToggleFloating = styled.div`
  display: ${({show}) => show ? 'auto' : 'none'};
  position: absolute;
  /* right: 0; */
  /* left: 0; */
  bottom: 0;
  animation-direction: ${({show}) => show ? 'normal' : 'reverse'};
  animation: ${AnimatedFloating} 0.1s linear;
  animation-fill-mode: both;
  
  @media (prefers-reduced-motion) {
    animation: none;
    transform: translateY(100%) scale(1);
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  margin: 0;
  padding: 0;
`;

export const ProfileFloatingMenu = () => {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setShowProfileMenu(!showProfileMenu)}>
        Account
      </Button>
      <ToggleFloating show={showProfileMenu}>
        <Profile />
      </ToggleFloating>
    </Wrapper>
  )
}
