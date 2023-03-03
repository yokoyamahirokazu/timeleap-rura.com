import React from 'react'
import styles from './index.module.css'

interface ButtonProps {
  color?: 'primary' | 'light' | 'red' | 'dark'
  size?: 'small' | 'medium' | 'large' | 'extraLarge'
  label: string
  onClick?: () => void
}
const Button = ({ label, size = 'medium', color, ...props }: ButtonProps) => {
  const style = () => {
    if (color === 'primary' || !color) {
      if (size === 'small') {
        return `${styles.button} ${styles.buttonPrimary}  ${styles.buttonSmall}`
      }
      if (size === 'medium' || !size) {
        return `${styles.button} ${styles.buttonPrimary}  ${styles.buttonMedium}`
      }
      if (size === 'large') {
        return `${styles.button} ${styles.buttonPrimary}  ${styles.buttonLarge}`
      }
      if (size === 'extraLarge') {
        return `${styles.button} ${styles.buttonPrimary}  ${styles.buttonExtraLarge}`
      }
    }
    if (color === 'light') {
      if (size === 'small') {
        return `${styles.button} ${styles.buttonLight}  ${styles.buttonSmall}`
      }
      if (size === 'medium' || !size) {
        return `${styles.button} ${styles.buttonLight}  ${styles.buttonMedium}`
      }
      if (size === 'large') {
        return `${styles.button} ${styles.buttonLight}  ${styles.buttonLarge}`
      }
      if (size === 'extraLarge') {
        return `${styles.button} ${styles.buttonLight}  ${styles.buttonExtraLarge}`
      }
    }
    if (color === 'red') {
      if (size === 'small') {
        return `${styles.button} ${styles.buttonRed}  ${styles.buttonSmall}`
      }
      if (size === 'medium' || !size) {
        return `${styles.button} ${styles.buttonRed}  ${styles.buttonMedium}`
      }
      if (size === 'large') {
        return `${styles.button} ${styles.buttonRed}  ${styles.buttonLarge}`
      }
      if (size === 'extraLarge') {
        return `${styles.button} ${styles.buttonRed}  ${styles.buttonExtraLarge}`
      }
    }
    if (color === 'dark') {
      if (size === 'small') {
        return `${styles.button} ${styles.buttonDark}  ${styles.buttonSmall}`
      }
      if (size === 'medium' || !size) {
        return `${styles.button} ${styles.buttonDark}  ${styles.buttonMedium}`
      }
      if (size === 'large') {
        return `${styles.button} ${styles.buttonDark}  ${styles.buttonLarge}`
      }
      if (size === 'extraLarge') {
        return `${styles.button} ${styles.buttonDark}  ${styles.buttonExtraLarge}`
      }
    }
  }
  return (
    <button type='button' className={style()} {...props}>
      {label}
    </button>
  )
}

export default Button
