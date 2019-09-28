export default {
  breakpoints: ['40em', '56em', '64em'],
  colors: {
    blue: '#37AEE3',
    green: '#00A880',
    grey: '#4A4A4A',
    lightGrey: '#F9F9F9',
    yellow: '#F5A623',
    turquoise: '#518399'
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
    p: {
      fontSize: 2
    },
    h1: {
      fontSize: 8,
      fontFamily: 'heading',
      fontWeight: 'bold',
      color: 'black',
      mt: 4,
      mb: 2
    },
    h2: {
      fontSize: 6,
      fontFamily: 'heading',
      fontWeight: 'bold',
      color: 'grey',
      mt: 4,
      mb: 2
    },
    h3: {
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'bold',
      color: 'grey',
      mt: 4,
      mb: 2
    },
    code: {
      bg: 'black',
      color: 'white',
      p: 3
    }
  }
}
