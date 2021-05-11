import styled from 'styled-components'
import SlideComponent from "./SlideComponent";
import {SlideData} from "../../data/SlideData";

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Slides = ({initialSlide}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'ease',
        autoplaySpeed: 7000,
        initialSlide: initialSlide,
        appendDots: dots => (
            <Dots>
                <Ul>{dots}</Ul>
            </Dots>
        )
    }

    return (
        <>
            <Slider {...settings}>
                {/*{*/}
                {/*    Object.entries(SlideData).map(([key, item]) => {*/}
                {/*        return <SlideComponent dataSource={item} />*/}
                {/*    })*/}
                {/*}*/}
                <SlideComponent dataSource={SlideData.revision}/>
                <SlideComponent dataSource={SlideData.visualData}/>
                <SlideComponent dataSource={SlideData.superHuman} />
                <SlideComponent dataSource={SlideData.aal} />
                <SlideComponent dataSource={SlideData.connecting} />
            </Slider>
        </>
    )
}

const Dots = styled.div`
    position: absolute;
  top: 65%;
  margin: auto;
  padding: 0;
  height: 0;
`
const Ul = styled.ul`
  position: relative;
    margin: auto;
  padding: 0;
`