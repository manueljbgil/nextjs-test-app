import Product from '../Product'
import Title from '../Title'

interface MenuSectionProps {
    categoryName: string
    products: any[]
}

const MenuSection = (props: MenuSectionProps) => {
    const { categoryName, products } = props

    return (
        <>
            {products.length > 0 ? (
                <>
                    <Title>{categoryName}</Title>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </>
            ) : null}
        </>
    )
}

export default MenuSection
