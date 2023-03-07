import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'

//fonts
//import localFont from '@next/font/local'
//const switzer = localFont({ src: './Switzer-Variable.ttf' })

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
