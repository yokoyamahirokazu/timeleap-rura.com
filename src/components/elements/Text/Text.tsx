import React from 'react'
import styles from './Text.module.css'

interface TextProps {
  type?: 'body' | 'headline'
  weight?: 'light' | 'regular' | 'bold'
  size?: 'es' | 's' | 'r' | 'm' | 'l' | 'el'
  element?: 'h1' | 'h2' | 'h3' | 'h4'
  label: string
}

export const Text = ({ type, weight, size, label, element }: TextProps) => {
  const typeStyle = () => {
    if (type === 'body' || !type) {
      return styles.body
    }
    if (type === 'headline') {
      return styles.headline
    }
  }
  const weightStyle = () => {
    if (type === 'headline') {
      if (weight === 'light') {
        return styles.weightLight
      }
      if (weight === 'regular') {
        return styles.weightRegular
      }
      if (weight === 'bold' || !weight) {
        return styles.weightBold
      }
    }
    if (weight === 'light') {
      return styles.weightLight
    }
    if (weight === 'regular' || !weight) {
      return styles.weightRegular
    }
    if (weight === 'bold') {
      return styles.weightBold
    }
  }
  const sizeStyle = () => {
    if (size === 'es') {
      return styles.extraSmall
    }
    if (size === 's') {
      return styles.small
    }
    if (size === 'r' || !size) {
      return styles.regular
    }
    if (size === 'm') {
      return styles.medium
    }
    if (size === 'l') {
      return styles.large
    }
    if (size === 'el') {
      return styles.extralarge
    }
  }
  const classNames = `${typeStyle()} ${weightStyle()} ${sizeStyle()}`

  const elementStyle = () => {
    if (type === 'headline') {
      if (element === 'h1') {
        return <h1 className={classNames}>{label}</h1>
      }
      if (element === 'h2') {
        return <h2 className={classNames}>{label}</h2>
      }
      if (element === 'h3') {
        return <h3 className={classNames}>{label}</h3>
      }
      if (element === 'h4') {
        return <h4 className={classNames}>{label}</h4>
      }
    }
    return <p className={classNames}>{label}</p>
  }

  return elementStyle()
}
