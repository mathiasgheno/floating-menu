import React from 'react';
import { Link, List } from './ProfileMenu.styled';

export function ProfileMenuList() {
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
