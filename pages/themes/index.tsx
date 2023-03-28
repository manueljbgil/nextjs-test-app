import { useRouter } from 'next/router'
import { ChangeEvent, ReactNode, useEffect } from 'react'
import { ActiveTheme, useThemeStore } from '../../state/themeState'
import { ThemeProvider } from './context'
import { ThemeTopNav } from './styles'
import { themes } from './utils'

interface ThemesProps {
    children: ReactNode
}

export default function Themes(props: ThemesProps) {
    const { children } = props
    const router = useRouter()
    const [theme, setTheme] = useThemeStore((state) => [
        state.theme,
        state.setTheme,
    ])

    const activeThemeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedTheme = e.target.value as ActiveTheme
        setTheme(selectedTheme)
        router.push(selectedTheme)
    }

    useEffect(() => {
        if (router.pathname === '/themes') {
            router.push(`/themes/${theme}`)
        }
    }, [router, theme])

    return (
        <div>
            <ThemeTopNav>
                <select onChange={activeThemeHandler} value={theme}>
                    {themes.map((theme) => (
                        <option value={theme}>{theme}</option>
                    ))}
                </select>
            </ThemeTopNav>
            <ThemeProvider>{children}</ThemeProvider>
        </div>
    )
}
