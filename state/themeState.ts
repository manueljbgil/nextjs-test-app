import { create } from 'zustand'

export type ActiveTheme = 'elegance' | 'burgers' | 'dina'

interface ThemeState {
    theme: ActiveTheme
    setTheme: (newTheme: ActiveTheme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: 'burgers',
    setTheme: (newTheme) => set(() => ({ theme: newTheme })),
}))
