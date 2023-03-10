import Link from 'next/link'
import React from 'react'
import { FiFileText, FiMail, FiChevronRight } from 'react-icons/fi'
import styles from './Button.module.css'

interface ButtonProps {
  color?: 'primary' | 'light' | 'red' | 'dark'
  size?: 'small' | 'regular' | 'medium' | 'large'
  label: string
  icon?: 'left' | 'right' | 'download' | 'contact' | 'next'
  iconSrc?: React.ReactNode
  href?: string
  block?: boolean
  onClick?: () => void
}
export const Button = ({
  label,
  size,
  color,
  icon,
  block,
  iconSrc,
  href,
  onClick,
}: ButtonProps) => {
  const colorStyle = () => {
    if (color === 'primary' || !color) return styles.buttonPrimary
    if (color === 'light' || !color) return styles.buttonLight
    if (color === 'red' || !color) return styles.buttonRed
    if (color === 'dark' || !color) return styles.buttonDark
    if (color === 'white' || !color) return styles.buttonWhite
  }
  const sizeStyle = () => {
    if (size === 'small') return styles.buttonSmall
    if (size === 'regular' || !size) return styles.buttonRegular
    if (size === 'medium') return styles.buttonMedium
    if (size === 'large') return styles.buttonLarge
  }
  const iconData = () => {
    if (!iconSrc) {
      if (icon === 'download') return <FiFileText />
      if (icon === 'contact' || !size) return <FiMail />
      if (icon === 'next' || !size) return <FiChevronRight />
    } else {
      return iconSrc
    }
  }

  return !href ? (
    <button
      type='button'
      className={`${styles.button} ${colorStyle()} ${sizeStyle()}`}
      style={{ display: block ? 'flex' : 'inline-flex' }}
      onClick={onClick}
    >
      {(icon === 'download' || icon === 'contact' || icon === 'left') && iconData()}
      <p>{label}</p>
      {(icon === 'next' || icon === 'right') && iconData()}
    </button>
  ) : (
    <Link
      href={href}
      type='button'
      className={`${styles.button} ${colorStyle()} ${sizeStyle()}`}
      style={{ display: block ? 'flex' : 'inline-flex' }}
    >
      {(icon === 'download' || icon === 'contact' || icon === 'left') && iconData()}
      <p>{label}</p>
      {(icon === 'next' || icon === 'right') && iconData()}
    </Link>
  )
}
