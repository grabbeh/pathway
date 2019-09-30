/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
export default props => (
  <ThemeProvider
    theme={{
      styles: {
        h1: {},
        h2: {
          color: 'green'
        },
        h3: {
          color: 'green'
        }
      }
    }}
  >
    <div
      {...props}
      sx={{
        maxWidth: 1024,
        mx: 'auto',
        py: [3, 4]
      }}
    />
  </ThemeProvider>
)
