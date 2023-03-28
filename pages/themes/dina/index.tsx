import { ReactElement } from 'react'
import Themes from '..'
import Banner from '../../../themes/dina/Banner'
import Details from '../../../themes/dina/Details'
import MenuSection from '../../../themes/dina/MenuSection'
import { Container, Content } from './styles'
import { lora, poppins } from '../../fonts'
import { useMealsStore } from '../../../state/mealsState'

const Dina = () => {
    const { categories, products } = useMealsStore()

    const getProductCategory = (categoryId: number[]) =>
        products.filter((product) => product.categories.includes(categoryId))

    return (
        <Container className={`${poppins.variable} ${lora.variable}`}>
            <Banner />
            <Content>
                {categories.map((category) => (
                    <MenuSection
                        key={category.id}
                        categoryName={category.name}
                        products={getProductCategory(category.id)}
                    />
                ))}
            </Content>
            <Details />
        </Container>
    )
}

export default Dina

Dina.getLayout = function getLayout(page: ReactElement) {
    return <Themes>{page}</Themes>
}
