import React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Groups2Icon from '@mui/icons-material/Groups2';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavbarData = [
  
  {
    title: 'Storefront',
    path: '/',
    icons: <StoreIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Editor',
    path: '/Editor ',
    icons: <StoreIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile',
    icons: <AccountCircleIcon />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icons: <Groups2Icon />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Out',
    path: '/SignOut',
    icons: <LogoutIcon />,
    cName: 'nav-text'
  }
];