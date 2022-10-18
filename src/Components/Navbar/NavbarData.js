import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as FcIcons from 'react-icons/fc';


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
    icons: <CgIcons.CgProfile />,
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
    icons: <FcIcons.FcAbout />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Out',
    path: '/SignOut',
    icons: <FaIcons.FaSignOutAlt />,
    cName: 'nav-text'
  }
];

