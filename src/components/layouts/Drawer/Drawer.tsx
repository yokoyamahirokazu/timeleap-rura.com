import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './Drawer.module.css'
import { RuraLogo, Button, Nav } from '@/components/index'
import { navContent } from '@/config'
import { getWindowSize } from '@/hooks/getWindowSize'
import { useClient } from '@/hooks/useClient'

type DrawerProps = {
  isHeaderFixed?: boolean
}

export const Drawer = ({ isHeaderFixed }: DrawerProps) => {
  const isClient = useClient()
  const { width } = getWindowSize()
  const [isModal, setIsModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', handleChangeRoute)

    return () => {
      router.events.off('routeChangeComplete', handleChangeRoute)
    }
  }, [router.events])

  function handleChangeRoute() {
    setIsModal(false)
  }

  const drawerClass = isModal ? `${styles.drawer} ${styles.active}` : styles.drawer
  const overlayClass = isModal ? `${styles.drawer_overlay} ${styles.active}` : styles.drawer_overlay
  const drawerBtnClass = isModal ? `${styles.drawer_btn} ${styles.close}` : styles.drawer_btn

  const btnSize = () => {
    if (width < 920) return 'small'
    if (!isHeaderFixed) return 'small'
    return 'regular'
  }

  return (
    <>
      <div className={styles.pcMenu}>
        <div className={styles.pcMenuNav}>
          <Nav />
        </div>
        <div className={styles.drawerButtonBox}>
          <Button href='/dwonload/' label='資料ダウンロード' icon='download' size={btnSize()} />
          <Button
            href='/contact/'
            label='お問い合わせ'
            icon='contact'
            color='light'
            size={btnSize()}
          />
        </div>
      </div>
      <div className={drawerClass}>
        <div className={styles.drawerInner}>
          <Nav />
          <div className={styles.drawerButtonBox}>
            <Button href='/dwonload/' label='資料ダウンロード' icon='download' block />
            <Button href='/contact/' label='お問い合わせ' icon='contact' color='light' block />
          </div>
        </div>
      </div>
      <div className={overlayClass} onClick={() => setIsModal(!isModal)}></div>
      <button className={drawerBtnClass} onClick={() => setIsModal(!isModal)}>
        <span></span>
      </button>
    </>
  )
}
