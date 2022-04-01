import React from 'react';
import { ProfileMenuList } from '../ProfileMenuList';
import {
  Button,
  Wrapper,
  FloatingMask,
  ToggleFloating
} from './ProfileFloatingMenu.styled';
import { CarretDown } from '../Icons/CarretDown';

export const ProfileFloatingMenu = ({ width }) => {
  const [ showProfileMenu, setShowProfileMenu ] = React.useState(false);

  return (
    <Wrapper>
      <Button
        rotate={showProfileMenu}
        onClick={() => setShowProfileMenu(!showProfileMenu)}
      >
        Account
        <CarretDown />
      </Button>
      <ToggleFloating
        show={showProfileMenu}
        width={width}
      >
        <ProfileMenuList />
      </ToggleFloating>
      <FloatingMask
        show={showProfileMenu}
        onClick={() => setShowProfileMenu(!showProfileMenu)}
      />
    </Wrapper>
  )
}
