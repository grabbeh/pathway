import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import Footer from '../components/shared/Footer'
import FindOutMore from '../components/shared/FindOutMore'
import Hero from '../components/online-manual/Hero'
import SEO from '../components/shared/seo'
import MainSection from '../components/online-manual/MainSection'

const OnlineManual = () => (
  <Wrapper>
    <SEO title='What you can do' />
    <Hero />
    <MainSection />
    <FindOutMore bg='lightGrey' />
    <Footer />
  </Wrapper>
)

export default OnlineManual
