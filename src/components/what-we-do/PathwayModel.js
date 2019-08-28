import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'
import PathwayServicesList from '../what-we-do/PathwayServicesList'
import KeyFact from '../what-we-do/KeyFact'
import changeCase from 'change-case'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayModelTitle
          wwdPathwayModel {
            childMarkdownRemark {
              html
            }
          }
          wwdPathwayModelPartTwo {
            childMarkdownRemark {
              html
            }
          }
          wwdPathwayModelSubtitle {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const PathwayModel = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let {
    pathwayModelTitle,
    wwdPathwayModelSubtitle,
    wwdPathwayModel,
    wwdPathwayModelPartTwo
  } = node
  
  const url = changeCase.hyphenCase(pathwayModelTitle)

  return (
    <Fragment>
      <Section>
        <Animation id={url}>
          <SectionTitle>{pathwayModelTitle}</SectionTitle>
        </Animation>
        <Animation>
          <Subtitle
            color='green'
            html={wwdPathwayModelSubtitle.childMarkdownRemark.html}
          />
        </Animation>
        <Animation>
          <BodyText html={wwdPathwayModel.childMarkdownRemark.html} />
        </Animation>
      </Section>
      <Animation>
        <Flex flexWrap='wrap'>
          <Box width={[1, 1 / 2]}>
            <KeyFact />
          </Box>
          <Box width={[1, 1 / 2]}>
            <PathwayServicesList />
          </Box>
        </Flex>
      </Animation>
      <Section>
        <Animation>
          <BodyText html={wwdPathwayModelPartTwo.childMarkdownRemark.html} />
        </Animation>
      </Section>
    </Fragment>
  )
}

export default PathwayModel
