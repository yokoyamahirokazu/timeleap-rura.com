import Image from 'next/image'
import React from 'react'
import styles from './ImgBox.module.css'

interface ImgBoxProps {
  src: string
  width?: number
  height?: number
  alt: string
  cover?: boolean
  aspectRatio?: '16/9' | '3/2' | '4/3' | '1/1'
  direction?: 'vertical' | 'holizontal'
}

export const ImgBox = ({ src, width, height, alt, cover, aspectRatio, direction }: ImgBoxProps) => {
  const ratio = () => {
    if (direction && direction === 'vertical') {
      if (aspectRatio === '16/9') return '9/16'
      if (aspectRatio === '3/2') return '2/3'
      if (aspectRatio === '4/3') return '3/4'
    }
    if (!direction && !aspectRatio) {
      return '16/9'
    }
    return aspectRatio
  }
  return cover ? (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio() }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes='100vw'
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}
