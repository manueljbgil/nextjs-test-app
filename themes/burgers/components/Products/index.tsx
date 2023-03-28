import {
    BoldText,
    CustomImage,
    ProductDescription,
    ProductInfo,
    ProductPrice,
    ProductTitle,
    Wrapper,
} from './styles'

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
                            {/* <CustomButton
                onClick={() =>
                  handleNewItem(
                    product.title.rendered,
                    Number(product.acf.preco)
                  )
                }
              >
                <AddCircleIcon />
              </CustomButton> */}
                        </ProductInfo>
                    )
                })}
        </Wrapper>
    )
}

export default Products
