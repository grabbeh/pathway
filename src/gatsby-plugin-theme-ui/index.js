import prism from '@theme-ui/prism/presets/prism.json'

const Heading = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  color: 'grey',
  mt: 4,
  mb: 2
}

export default {
  breakpoints: ['40em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    blue: '#37AEE3',
    green: '#00A880',
    grey: '#4A4A4A',
    lightGrey: '#F9F9F9',
    yellow: '#F5A623',
    turquoise: '#518399'
  },
  modes: {
    light: {
      color: '#37AEE3',
      bg: '#fff'
    },
    blue: {
      color: '#fff',
      bg: '#37AEE3'
    },
    green: {
      color: '#fff',
      bg: '#00A880'
    }
  },
  radii: [0, 2, 4, 16, 9999, '100%'],
  fonts: {
    body:
      'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    heading:
      'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },
  fontSizes: [12, 14, 16, 18, 22, 26, 36, 48, 60, 72, 100],
  fontWeights: {
    light: 200,
    body: 300,
    subtitle: 600,
    bold: 700,
    heavy: 900
  },
  lineHeights: {
    text: '24px',
    subtitle: '30px',
    medium: '36px',
    tagline: '46px',
    heading: '68px',
    heavy: '90px'
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body'
    },
    text: {
      color: 'grey'
    },
    h1: {
      fontSize: 6,
      ...Heading
    },
    h2: {
      fontSize: 6,
      ...Heading
    },
    h3: {
      fontSize: 4,
      ...Heading
    },
    code: {
      p: 3,
      mt: 3,
      overflowX: 'auto',
      fontSize: 3
    },
    pre: {
      ...prism
    },
    a: {
      color: 'blue'
    }
  }
}
