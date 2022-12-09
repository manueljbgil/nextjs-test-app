import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../styles/theme'
import '../styles/globals.css'
import GlobalStyle from '../styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
