if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './config/keys.env' })
}

module.exports = {
  siteMetadata: {
    title: `The Pathway Social Franchise`,
    description: `The Pathway model offers a new way to help people who are homeless`,
    author: `John Doe`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        plugins: []
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43666889-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: 'inline',
              footnoteBackRefDisplay: 'inline',
              footnoteBackRefInnerText: '^',
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              footnoteBackRefInnerTextStartPosition: 'front'
            }
          }
        ]
      }
    },
    `gatsby-plugin-theme-ui`
  ]
}
