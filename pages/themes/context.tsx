import { createContext, ReactNode, useLayoutEffect } from 'react'
import { useMealsStore } from '../../state/mealsState'

interface CMSData {
    categories: any[]
    products: any[]
}

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext({} as CMSData)

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props
    const { categories, products, isLoading, fetchMeals } = useMealsStore()

    useLayoutEffect(() => {
        fetchMeals()
    }, [])

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <ThemeContext.Provider value={{ categories, products }}>
                    {children}
                </ThemeContext.Provider>
            )}
        </>
    )
}
