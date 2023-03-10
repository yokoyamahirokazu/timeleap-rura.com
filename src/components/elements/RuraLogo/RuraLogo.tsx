import React from 'react'
import Logo from '../../../../public/RuraLogo.svg'
import LogoTitle from '../../../../public/RuraLogoTitle.svg'
import styles from './RuraLogo.module.css'

interface RuraLogoProps {
  color?: 'primary' | 'white'
  text?: 'left' | 'center' | 'right' | 'full' | 'none'
  direciton?: 'vertical' | 'holizontal'
}
export const RuraLogo = ({ color, text, direciton }: RuraLogoProps) => {
  const colorStyle = () => {
    if (color === 'primary' || !color) return styles.colorPrimary
    if (color === 'white') return styles.colorWhite
  }
  const textStyle = () => {
    if (text === 'left' || !text || text === 'none') return
    if (text === 'center') return styles.logoTextCenter
    if (text === 'right') return styles.logoTextRight
    if (text === 'full') return styles.logoTextFull
  }
  const directionStyle = () => {
    if (direciton === 'vertical' || !direciton) return
    if (direciton === 'holizontal') return styles.ruraLogoFlex
  }
  const LogoStyle = () => {
    if (direciton === 'holizontal') {
      if (text === 'left' || text === 'center') return styles.logo
      if (text === 'right') return `${styles.logo} ${styles.logoOrder1}`
    }
    return styles.logo
  }
  const TextOrderStyle = () => {
    if (direciton === 'holizontal') {
      if (text === 'left' || text === 'center') return
      if (text === 'right') return styles.textOrder2
    }
  }

  return (
    <div className={`${styles.ruraLogo} ${colorStyle()} ${directionStyle()}`}>
      {text !== 'none' && (
        <div className={`${styles.logoText} ${textStyle()} ${TextOrderStyle()}`}>
          <LogoTitle />
        </div>
      )}
      <div className={LogoStyle()}>
        <Logo />
      </div>
    </div>
  )
}
