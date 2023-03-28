import axios from 'axios'
import { create } from 'zustand'

type Store = {
    categories: any[]
    products: any[]
    isLoading: boolean
    error: string | null
    fetchMeals: () => void
}

export const useMealsStore = create<Store>((set) => ({
    categories: [],
    products: [],
    isLoading: false,
    error: null,
    fetchMeals: async () => {
        try {
            set({ isLoading: true })
            const [categories, products] = await Promise.all([
                axios
                    .get(
                        'https://endpoints.flaviamiranda.pt/wp-json/wp/v2/categories'
                    )
                    .then((res) => res.data),
                axios
                    .get(
                        'https://endpoints.flaviamiranda.pt/wp-json/wp/v2/produtos'
                    )
                    .then((res) => res.data),
            ])

            console.log(categories, products)
            set({ categories, products, isLoading: false, error: null })
        } catch (error) {
            set({ isLoading: false, error: 'Error fetching data' })
        }
    },
}))
