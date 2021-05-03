import styled from 'styled-components'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import {SDPTexts} from "../../data/SDP";
import {usePhoneVersion} from "../../components/usePhoneVersion";
import { PhoneSDP } from "../../components/phoneComponents/PhoneSDP";

const SDP = () => {
    const phoneVersion = usePhoneVersion()

    return (
        <Layout backgroundColor='#f5f5f5'>
            {phoneVersion ? <PhoneSDP /> : <StandardSDP />}
        </Layout>
    )
}

const StandardSDP = () => {
    return (
        <Layout backgroundColor='#f5f5f5'>
            <ContentWrapper>
                <HorizonWrapper>
                    <ImageWrapper>
                        <Image src='/works/mockup.distributor.png' width='300' height='486'/>
                    </ImageWrapper>
                    <Section>
                        <SectionTitle>
                            {SDPTexts.introduction.title}
                        </SectionTitle>
                        <SectionPlain>{SDPTexts.introduction.plain}</SectionPlain>
                    </Section>
                </HorizonWrapper>

                <Section>
                    <SectionTitle>{SDPTexts.research.title}</SectionTitle>
                    <SectionPlain>{SDPTexts.research.plain}</SectionPlain>
                    <ResearchWrapper>
                        <Image src='/works/Stakeholders.png' width='661' height='790'/>
                    </ResearchWrapper>
                </Section>
                <Section style={{width: '70%'}}>
                    <SectionTitle>{SDPTexts.challenges.title}</SectionTitle>
                    <SubTitle>{SDPTexts.challenges.c1Title}</SubTitle>
                    <SectionPlain>{SDPTexts.challenges.c1Plain}</SectionPlain>
                    <SubTitle>{SDPTexts.challenges.c2Title}</SubTitle>
                    <SectionPlain>{SDPTexts.challenges.c2Plain}</SectionPlain>
                    <SubTitle>{SDPTexts.challenges.c3Title}</SubTitle>
                    <SectionPlain>{SDPTexts.challenges.c3Plain}</SectionPlain>
                </Section>
                <Link href='/works/wireframe.png'>
                    <Wireframe>
                        <SubTitle>Wireframe</SubTitle>
                        <Image src='/works/wireframe.png' width='1192' height='1099'/>
                    </Wireframe>
                </Link>
                <Section>
                    <SectionTitle>{SDPTexts.prototype.title}</SectionTitle>
                    <SectionPlain>{SDPTexts.prototype.plain}</SectionPlain>
                </Section>
                <Wireframe>
                    <SubTitle>Design Language</SubTitle>
                    <Image src='/works/design.language.png' width='825' height='301' />
                </Wireframe>
                <Wireframe>
                    <SubTitle>Visual design</SubTitle>
                    <Image src='/works/Mockups.png' width='915' height='501'/>
                </Wireframe>
            </ContentWrapper>
        </Layout>
    )
}

const ContentWrapper = styled.div`
  position: absolute;
  width: 80%;
  max-width: 950px;
  top: 20%;
  left: 50%;
  padding-bottom: 10%;

  transform: translate(-50%, 0%)
`

const HorizonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 200%;
`

const ResearchWrapper = styled.div`
  position: relative;
  padding: 0 10%;
`

const Section = styled.div`
  position: relative;
  top: 10vh;
`

const Wireframe = styled.div`
  position: relative;
  //padding: 10% 0;
  margin-top: 20%;

  :hover {
    cursor: pointer;
  }
`

const SectionTitle = styled.h2`
  font-weight: 300;
  font-size: 2.5em;
`

const SubTitle = styled.h3`
  margin: auto;
  padding-top: 1em;
`

const SectionPlain = styled.p``

export default SDP