import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import Stats from '../components/Stats'
import Hero from '../components/Hero'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Hero />
      <IntroSection />
      <Stats />
      <AboutSection />
    </Layout>
  )
}

export default IndexPage
