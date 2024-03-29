import Head from 'next/head'
import axios from 'axios'
import { ReactElement, useState } from 'react'
import Products from '../../../themes/burgers/components/Products'
import { AddedItemsList, Price, VirtualCart } from './styles'
import Landing from '../../../themes/burgers/layouts/Landing'
import Themes from '..'
import { useMealsStore } from '../../../state/mealsState'

export default function Burgers() {
    const { categories, products } = useMealsStore()
    const [showCart, setShowCart] = useState<boolean>(false)
    const [itemsCount, setItemsCount] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [items, setItems] = useState<Array<any>>([])

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
                <link
                    rel="preload"
                    href="./fonts/Khand-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin=""
                />
            </Head>
            <Landing categories={categories}>
                <div>
                    {categories
                        .filter((category) => category.parent === 0)
                        .map((category, idx) => {
                            return (
                                products?.filter(
                                    (product) =>
                                        product.categories[0] === category.id &&
                                        product.categories.length === 1
                                ).length > 0 && (
                                    <Products
                                        key={`${category}idx${idx}`}
                                        category={category}
                                        products={products}
                                        handleNewItem={(item, price) => {
                                            console.log(price)

                                            setTotalPrice(totalPrice + price)
                                            setItemsCount(itemsCount + 1)
                                            setItems((prevState) => [
                                                ...prevState,
                                                item,
                                            ])
                                        }}
                                    />
                                )
                            )
                        })}
                </div>
                {itemsCount > 0 && (
                    <VirtualCart
                        onClick={() => setShowCart(!showCart)}
                        show={showCart}
                    >
                        {!showCart ? (
                            itemsCount
                        ) : (
                            <>
                                <AddedItemsList>
                                    {items.map((i, idx) => {
                                        return <p key={`${i}${idx}`}>{i}</p>
                                    })}
                                </AddedItemsList>
                                <Price>€ {totalPrice}</Price>
                            </>
                        )}
                    </VirtualCart>
                )}
            </Landing>
        </>
    )
}

Burgers.getLayout = function getLayout(page: ReactElement) {
    return <Themes>{page}</Themes>
}
