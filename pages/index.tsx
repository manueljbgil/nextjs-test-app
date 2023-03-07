import Head from 'next/head'
import axios from 'axios'
import Landing from '../layouts/Landing'
import Products from '../components/Products'

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get categories
    const categories = await axios
        .get('https://endpoints.flaviamiranda.pt/wp-json/wp/v2/categories')
        .then((res) => res.data)

    const products = await axios
        .get('https://endpoints.flaviamiranda.pt/wp-json/wp/v2/produtos')
        .then((res) => res.data)

    // By returning { props: { categories } }, the Home component
    // will receive `categories` as a prop at build time
    return {
        props: {
            categories,
            products,
        },
    }
}

export default function Home({ categories, products }) {
    return (
        <>
            <Head>
                <title> Burgers </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="./fonts/Switzer-Variable.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin=""
                />
            </Head>
            <Landing>
                <div>
                    {categories
                        .filter((category) => category.parent === 0)
                        .map((category) => {
                            return (
                                products?.filter(
                                    (product) =>
                                        product.categories[0] === category.id &&
                                        product.categories.length === 1
                                ).length > 0 && (
                                    <Products
                                        category={category}
                                        products={products}
                                    />
                                )
                            )
                        })}
                </div>
            </Landing>
        </>
    )
}
