import React from 'react'
import styles from './Section.module.css'

interface TextProps {
  bg?: 'light' | 'primary' | 'dark' | 'white'
  id?: string
  full?: boolean
  children?: string | number | React.ReactNode
}
export const Section = ({ bg, id, full, children }: TextProps) => {
  const bgStyle = () => {
    if (bg === 'light') return styles.bgLight
    if (bg === 'primary') return styles.bgPrimary
    if (bg === 'dark') return styles.bgDark
    return
  }

  return (
    <section id={id ? id : ''} className={`${styles.section} ${bgStyle()} `}>
      {!full ? <div className={styles.sectionInner}>{children}</div> : children}
    </section>
  )
}
