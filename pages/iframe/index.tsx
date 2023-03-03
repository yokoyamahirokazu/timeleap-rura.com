import { Inter } from '@next/font/google'
import { NextPage } from 'next'
import styled from 'styled-components'
import { getWindowSize } from '@/hooks/getWindowSize'

const Video: NextPage = () => {
  const { height, width } = getWindowSize()
  console.log(height)
  const maxWidth = ((height - 52 - 109 - 56) * 16) / 9
  console.log(maxWidth)

  return (
    <Wrapper>
      <Header>Header</Header>
      <IframeWrapper>
        <div>
          <IframeBox style={{ maxWidth: maxWidth }}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.369763096126!2d139.77521301534017!3d35.692517380191724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f8870b62f7d%3A0x753c9e964a52910d!2z44K_44Kk44Og44Oq44O844OX5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1677226890674!5m2!1sja!2sjp'
              loading='lazy'
            ></iframe>
          </IframeBox>
          <Caption>店舗名：ダミー店舗名</Caption>
        </div>
      </IframeWrapper>
      <Footer>Footer</Footer>
    </Wrapper>
  )
}
export default Video

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
`

const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 52px;
  background: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    height: 48px;
  }
`
const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 109px;
  background: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IframeWrapper = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 52px - 109px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const IframeBox = styled.div`
  width: 100vw;
  aspect-ratio: 16 / 9;
  overfrow: hidden;
  & iframe {
    display: block;
    width: 100% !important;
    height: 100% !important;
    border-width: 0 !important;
  }
`
const Caption = styled.p`
  font-size: 16px;
  position: relative;
  line-height: 150%;
  padding: 14px 16px 18px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`
