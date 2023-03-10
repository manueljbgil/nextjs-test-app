import { IconButton } from '@material-ui/core'
import styled from 'styled-components'
import {} from '../styles/globalStyles'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const Products = ({ category, products, handleNewItem }) => {
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
                                <CustomImage src={product.acf.imagem} />
                            )}
                            <ProductTitle>
                                {product.title.rendered}
                            </ProductTitle>
                            <ProductDescription>
                                {product.acf.descricao_do_produto}
                            </ProductDescription>
                            <ProductPrice>€ {product.acf.preco}</ProductPrice>
                            <CustomButton
                                onClick={() =>
                                    handleNewItem(
                                        product.title.rendered,
                                        Number(product.acf.preco)
                                    )
                                }
                            >
                                <AddCircleIcon />
                            </CustomButton>
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
    font-family: 'Khand-Bold';
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

const CustomButton = styled(IconButton)`
    margin: -11px;
    color: ${(props) => props.theme.fg} !important;
`

const CustomImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const ProductTitle = styled.p`
    font-family: 'Khand-Bold';
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
    font-family: 'Khand-Bold';
    font-size: 18px;
`
