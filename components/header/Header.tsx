import Navigation from '../navigation/Navigation';
import styles from './Header.module.css';

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