import Image from 'next/image'
import {
    ProductContainer,
    NoImage,
    Item,
    Title,
    Dots,
    Price,
    Description,
} from './styles'

interface ProductProps {
    product: any
}

const Product = (props: ProductProps) => {
    const { product } = props

    return (
        <ProductContainer>
            {product.acf.imagem ? (
                <Image
                    src={product.acf.imagem}
                    width={55}
                    height={55}
                    alt={
                        product.acf.imagem ? product.title.rendered : 'no image'
                    }
                />
            ) : (
                <NoImage />
            )}
            <div>
                <Item>
                    <Title>{product.title.rendered}</Title>
                    <Dots />
                    <Price>{(+product.acf.preco).toFixed(2)}€</Price>
                </Item>
                <Description>{product.acf.descricao_do_produto}</Description>
            </div>
        </ProductContainer>
    )
}

export default Product
