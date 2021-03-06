import styled from 'styled-components'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal, Tween } from 'react-gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, {useState, useEffect} from 'react'
import SlideComponent from "../components/phoneComponents/SlideComponent";
import { Slides } from '../components/phoneComponents/Slides'
import {ContentsList} from '../components/phoneComponents/ContentsList'
import {SlideData} from "../data/SlideData";
import {DesignCardData} from '../data/CardData'
import {PhoneMenu} from "../components/phoneComponents/PhoneMenu";
import {usePhoneVersion} from "../components/usePhoneVersion";
import { useDispatch, useSelector } from 'react-redux'
import { switchLanguage } from '../store/actions/switchAction'
import {ContentList} from "../components/contentList";
import {designContents, implementData, metricsData} from "../data/contentListData";

const Arrow = ({className, style, onClick}) => (
    <div className={className} onClick={onClick} style={{padding: '2rem', position: 'absolute', right: '0', width: '5%'}} >
        <Image src='/Arrow.svg' width='83' height='70' />
    </div>
)

const Works = () => {
    const [randomSlide, setRandomSlide] = useState(0)
    const phoneVersion = usePhoneVersion()
    const {language} = useSelector(state => state.language)

    const settings = {
        dots: true,
        // dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        customPaging: i => (
            <Dot >
            </Dot>
        )
    }

    useEffect(() => {
        setRandomSlide(getRandomInt(5))
    }, [])


    const getRandomInt = max => {
        return Math.floor(Math.random() * max)
    }

    return (
        <Layout backgroundColor='white' overwrite>
            {!phoneVersion ?

                <Slider {...settings}>

                    <div>
                    <Wrapper>
                        <Reveal>
                            <Tween
                                from={{opacity: 0, y: '100'}}
                                duration={1}
                                delay={0.3}
                            >
                                <ImgWrapper>
                                    <Image src='/works/BDPtitlePhoto.webp' width='810' height='607' objectFit='cover'/>
                                </ImgWrapper>
                            </Tween>
                        </Reveal>
                        <Text>
                            <H1 fgColor='#333333'>Bonus Distribution Platform</H1>
                            <P>BDP is a project management mini-program specially designed for Hainan Yushun. Through the management platform, the customer from the enterprise can publish and modified projects and entrust the tax collection agency located in Hainan Freeport to distribute the project dividends to the participating employees with more favourable tax policies. How to let company users create projects more efficiently through the WeChat mini-program platform, communicate seamlessly with the distributor staff, and meet the needs of more random and casual scenarios is the project's main purpose.</P>
                            <Link href='/SDP'>
                                <Button bgColor='#333333'>Enter the project</Button>
                            </Link>
                        </Text>
                    </Wrapper>
                    </div>

                    <div>
                    <Wrapper>
                        <ImgWrapper>
                            <Image src='/festivalGuide/fgTitlePhoto.webp' width='810' height='607' />
                        </ImgWrapper>
                        <Text>
                            <H1 fgColor='#FF9066'>Festival Guide</H1>
                            <P>The "Festival Guide" is a navigation application that bundles information about the different events and provides a comprehensive basic service for festival visitors. Meanwhile, it also gathers crowd movements, predicts hazards such as mass panic in advance, and indicates the nearest service points for emergencies.</P>
                            <Link href='/festival-guide'>
                                <Button bgColor='#FF9066'>Enter the project</Button>
                            </Link>
                        </Text>
                    </Wrapper>
                    </div>

                    <div>
                    <Wrapper>
                        <ImgWrapper>
                            <Image src='/pflegemangel/titlePhoto.webp' width='810' height='607'/>
                        </ImgWrapper>
                        <Text>
                            <H1 fgColor='#17A2B8'>Pflegemangel</H1>
                            <P>As pre-research for the ambient assisted living project, we conducted various UX methods such as interviews, research, and competitive analysis to demonstrate the complete process and methodology from early research to the final product.</P>
                            <Link href='/pflegemangel'>
                                <Button bgColor='#17A2B8'>Enter the project</Button>
                            </Link>
                        </Text>
                    </Wrapper>
                    </div>

                </Slider>
                :
                <div style={{overflow: 'hidden'}}>
                    <Slides initialSlide={randomSlide} />
                    <ContentsList contentsData={DesignCardData} listTitle='Comprehensive design process'/>
                </div>
            }
        </Layout>
    )
}


const UXImg = styled.div`
    position: absolute;
`

const UWrapper = styled.div`
    position: absolute;
`

const Dot = styled.div`
  position: absolute;
  bottom: 5rem;
    height: 4px;
  width: 25px;
  border-radius: 4px;
  background-color: grey;
  //margin: auto;
  margin-left: 30vw;
`

const UXWrapper = styled.div`
    display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`

export const Button = styled.div`
    background-color: ${props => props.bgColor};
  color: white;
  
  font-weight: 900;
  font-size: 1.2rem;
  
  width: 240px;
  height: 20px;
  padding: 20px;
  
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  //position: absolute;
  //bottom: 0;
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 95vh;
  margin: auto 0;
  //padding-bottom: 10vh;
`

const Text = styled.div`
  position: inherit;
    max-width: 500px;
  width: 40vw;
  padding-right: 10rem;
`

const H1 = styled.h1`
    font-size: 3.2rem;
  font-weight: 900;
  margin: auto;
  color: ${props => props.fgColor};
`

const H2 = styled.h2`
    font-weight: 600;
  margin-top: auto;
`

const P = styled.p`
`

const ImgWrapper = styled.div`
  position: inherit;
    height: 70%;
`

export default Works