import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const NavbarData = [
  {
    title: 'Storefront',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile',
    icons: <FaIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Followed Shops',
    path: '/FollowedShops',
    icons: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icons: <FaIcons.FcAbout />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Out',
    path: '/SignOut',
    icons: <FaIcons.FaSignOutAlt />,
    cName: 'nav-text'
  }
];