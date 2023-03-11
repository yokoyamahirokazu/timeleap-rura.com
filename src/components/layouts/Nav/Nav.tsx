import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Link as Scroll } from 'react-scroll'
import styles from './Nav.module.css'
import { Text } from '@/components/'
import { navContent } from '@/config'

interface NavProps {
  footer?: boolean
}

export const Nav = ({ footer }: NavProps) => {
  const headerNavContent = navContent.filter((n) => n.forFooter !== true)
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <ul>
        {footer && (
          <li>
            <Link href='/'>ホーム</Link>
          </li>
        )}
        {headerNavContent.map((navItems, index) => (
          <li key={index}>
            {navItems.anchor && router.pathname === '/' && (
              <Scroll to={navItems.anchor} smooth={true} duration={600}>
                {navItems.title}
              </Scroll>
            )}
            {navItems.anchor && router.pathname !== '/' && (
              <Link href={`/#${navItems.anchor}`}>{navItems.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
