import Link from 'next/link';
import styles from './Header.module.css'
import Navigation from '../navigation/Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  )
}