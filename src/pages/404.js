import React from 'react'
import { Wrapper, Footer } from '../components/shared'
import { SectionTitle, Text } from '../components/typography'
import { Link, StandardSection } from '../components/general'

const Error = () => (
  <Wrapper>
    <StandardSection>
      <SectionTitle text='Sorry, looks like something went wrong' />
      <Text>
        Try going <Link href='/'>home</Link>
      </Text>
    </StandardSection>
    <Footer />
  </Wrapper>
)

export default Error
