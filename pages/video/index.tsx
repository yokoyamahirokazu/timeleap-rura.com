import { Inter } from '@next/font/google'
import { NextPage } from 'next'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const Video: NextPage = () => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <VideoWrapper>
        <VideoBox>
          <video src='flog.mp4'></video>
          <VideoCaption>店舗名：ダミー店舗名</VideoCaption>
        </VideoBox>
      </VideoWrapper>
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

const VideoWrapper = styled.div`
  position: absolute;
  top: 52px;
  width: 100vw;
  height: calc(100vh - 52px - 109px);
  left: 0;
`

const VideoBox = styled.div`
  object-fit: contain;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  video {
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 52px - 109px - 56px);
    margin: 0;
  }
`
const VideoCaption = styled.p`
  font-size: 16px;
  position: relative;
  line-height: 150%;
  padding: 16px;
  text-align: center;
`
