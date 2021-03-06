import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general'
import { IntroTitle, SectionTitle, Subtitle } from '../typography'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    whatWeDoPage: allContentfulWwdPage {
      nodes {
        wwdIntro
        wwdMainSectionTitle
        wwdMainSectionSubtitle {
          childMarkdownRemark {
            html
          }
        }
        wwdMainSection {
          childMdx {
            body
          }
        }
      }
    }
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  const {
    wwdIntro,
    wwdMainSectionTitle,
    wwdMainSectionSubtitle,
    wwdMainSection
  } = data.whatWeDoPage.nodes[0]

  return (
    <Section>
      <Animation>
        <IntroTitle text={wwdIntro} color='green' />
        <SectionTitle text={wwdMainSectionTitle} />
        <Subtitle
          color='green'
          html={wwdMainSectionSubtitle.childMarkdownRemark.html}
        />
        <MDXRenderer>{wwdMainSection.childMdx.body}</MDXRenderer>
      </Animation>
    </Section>
  )
}

export default MainSection
