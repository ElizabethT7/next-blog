import Link from 'next/link';
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/" className="navigation">Home</Link>
        <Link href="/blog" className="navigation">Blog</Link>
        <Link href="/about" className="navigation">About</Link>
      </div>
    </header>
  )
}