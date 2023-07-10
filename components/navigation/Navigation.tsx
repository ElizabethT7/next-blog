'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
  const session = useSession();

  console.log(session)

  return (
    <>
    {
      navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'navigation_active' : 'navigation'}
          >
            {link.label}
          </Link>
        )
      })
    }
    {session.data && (
      <Link href="/profile">Profile</Link>
    )}
    {session.data ? 
      <Link href="#" className="navigation" onClick={() => signOut({ callbackUrl: '/'})}>Sigh Out</Link>
      : <Link href="/signin" className="navigation" >Sign In</Link>}
    </>
  )
}