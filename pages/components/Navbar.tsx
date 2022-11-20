import Link from 'next/link';
import styles from './Navbar.module.css';
import {ActiveLink} from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(page =>(
          <ActiveLink key={page.href} text={page.text} href={page.href} ></ActiveLink>
        ))
      }
    </nav>
  )
};