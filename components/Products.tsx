import styled from 'styled-components'
import {} from '../styles/globalStyles'
//import burgerBrand from '../assets/burger_brand.png'

const Products = ({ category, products }) => {
    return (
        <Wrapper>
            <BoldText>{category.name}</BoldText>
            {products
                ?.filter(
                    (product) =>
                        product.categories[0] === category.id &&
                        product.categories.length === 1
                )
                .map((product, idx) => {
                    return (
                        <ProductInfo key={idx}>
                            {product.acf.imagem !== null && (
                                <img
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: '50%',
                                    }}
                                    src={product.acf.imagem}
                                />
                            )}
                            <ProductTitle>
                                {product.title.rendered}
                            </ProductTitle>
                            <ProductDescription>
                                {product.acf.descricao_do_produto}
                            </ProductDescription>
                            <ProductPrice>€ {product.acf.preco}</ProductPrice>
                        </ProductInfo>
                    )
                })}
        </Wrapper>
    )
}

export default Products

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`
const BoldText = styled.p`
    font-family: 'Switzer-Variable';
    font-size: 28px;
    color: white;
    text-align: center;
    width: 100%;
    min-width: 300px;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 315px;
    max-width: 700px;
    padding-bottom: 35px;

    > p {
        text-align: center;
    }
`

const ProductTitle = styled.p`
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 1.5px;
    margin-bottom: 0px;

    &:hover {
        color: ${(props) => props.theme.fg};
    }
`

const ProductDescription = styled.p`
    font-size: 12px;
    margin-bottom: 0px;
`

const ProductPrice = styled.p`
    font-size: 18px;
`
