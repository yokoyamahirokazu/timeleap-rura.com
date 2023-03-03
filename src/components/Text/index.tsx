import React from 'react'
import styles from './index.module.css'

interface TextProps {
  style?: 'h1' | 'h2' | 'h3' | 'h4' | 'body'
  label: string
}
const Text = ({ style, label, ...props }: TextProps) => {
  const className = () => {
    if (style === 'h1') {
      return `${styles.headline1}`
    }
    if (style === 'h2') {
      return `${styles.headline2}`
    }
    if (style === 'h3') {
      return `${styles.headline3}`
    }
    if (style === 'h4') {
      return `${styles.headline4}`
    }
    if (style === 'body' || !style) {
      return `${styles.body}`
    }
  }
  return (
    <p className={className()} {...props}>
      {label}
    </p>
  )
}

export default Text
