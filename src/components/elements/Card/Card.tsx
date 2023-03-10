import React from 'react'
import styles from './Card.module.css'

interface TextProps {
  radius?: 'small' | 'regular' | 'medium' | 'large' | 'none'
  padding?: 'small' | 'regular' | 'medium' | 'large' | 'none'
  shadow?: '10' | '20' | '30' | '40' | 'none'
  children?: string | number | React.ReactNode
}
export const Card = ({ radius, padding, shadow, children }: TextProps) => {
  const radiuStyle = () => {
    if (radius === 'small') return styles.radiusSmall
    if (radius === 'regular') return styles.radiusRegular
    if (radius === 'medium') return styles.radiusMedium
    if (radius === 'large') return styles.radiusLarge
    if (radius === 'none') return styles.radiusNone
    return styles.radiusSmall
  }
  const paddingStyle = () => {
    if (padding === 'small') return styles.paddingSmall
    if (padding === 'regular') return styles.paddingRegular
    if (padding === 'medium') return styles.paddingMedium
    if (padding === 'large') return styles.paddingLarge
    if (!padding || padding === 'none') return styles.paddingNone
  }
  const shadowStyle = () => {
    if (shadow === '10') return styles.shadow10
    if (shadow === '20') return styles.shadow20
    if (shadow === '30') return styles.shadow30
    if (shadow === '40') return styles.shadow40
    if (shadow === 'none') return styles.shadowNone
    return styles.shadow20
  }

  return (
    <div className={`${styles.card} ${radiuStyle()} ${paddingStyle()} ${shadowStyle()}`}>
      {children}
    </div>
  )
}
