import styles from './Footer.module.css'
import { RuraLogo, Nav, Button } from '@/components/index'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopInner}>
          <Nav footer={true} />
          <div className={styles.footerButtonBox}>
            <Button href='/dwonload/' label='資料ダウンロード' icon='download' block />
            <Button href='/contact/' label='お問い合わせ' icon='contact' color='light' block />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerLogo}>
          <RuraLogo text='none' color='white' />
        </div>
      </div>
    </footer>
  )
}
