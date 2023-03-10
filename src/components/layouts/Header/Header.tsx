import React, { useState, useCallback, useEffect } from 'react'
import styles from './Header.module.css'
import { RuraLogo, Button, Nav, Drawer } from '@/components/index'

export const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(true)

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset
    if (offset > 0) {
      setIsHeaderFixed(false)
    } else {
      setIsHeaderFixed(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [scrollEvent])

  const headerClass = isHeaderFixed ? styles.header : `${styles.header} ${styles.headerFixed}`

  return (
    <header className={headerClass}>
      <div className={styles.headerLogo}>
        <RuraLogo text={isHeaderFixed ? 'full' : 'none'} />
      </div>
      <Drawer isHeaderFixed={isHeaderFixed} />
    </header>
  )
}
