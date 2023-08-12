'use client'
import Link from "next/link"
import styles from './navbar.module.scss'
import DarkModeToggle from "../DarkModeToggle"
import { signOut, useSession } from "next-auth/react"

interface ILinks {
  id: number
  title: string
  url: string
}

const links: ILinks[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];


const Navbar = () => {
  const session = useSession();
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href={'/'}>MyApp</Link>
      <ul className={styles.menu}>
        <DarkModeToggle />
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
      {session.status === 'authenticated' && <button onClick={() => signOut()} className={styles.logout}>Logout</button>}
    </nav>
  )
}

export default Navbar