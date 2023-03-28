import { Poppins, Lora } from 'next/font/google'

export const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--dina-font-primary',
})

export const lora = Lora({
    weight: '400',
    display: 'swap',
    subsets: ['latin'],
    variable: '--dina-font-secondary',
})
