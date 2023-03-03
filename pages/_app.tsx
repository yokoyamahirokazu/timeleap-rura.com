import '@/styles/globals.css'
import { Noto_Sans_JP } from '@next/font/google'

// const notoSansJp = Noto_Sans_JP({
//   weight: ['300', '400', '500', '700'],
//   preload: false,
//   variable: '--jp-font',
// })

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <style jsx global>{`
        html {
          font-family: ${notoSansJp.style.fontFamily};
        }
      `}</style> */}
      <Component {...pageProps} />
    </>
  )
}
