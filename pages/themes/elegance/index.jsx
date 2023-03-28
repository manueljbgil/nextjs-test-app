import Head from 'next/head'
import ImageTopSection from '../../../public/bg-top-section.jpg'
import SubProduct from '../../../themes/elegance/SubProduct'
import LogoSrc from '../../../public/extra-logo-white.png'
import Image from 'next/image'
import Themes from '..'
import { useState } from 'react'
import {
    CategoryBackground,
    Facebook,
    Footer,
    Grid3,
    Instagram,
    ListProducts,
    Logo,
    Order,
    OrderOnline,
    OrderOnline2,
    Overlay,
    ProductsWrapper,
    Section,
    Social,
    SubTitle,
    Title,
    TopSection,
    Tripadvisor,
    Twitter,
    Wrapper,
    Youtube,
} from './styles'
import { useMealsStore } from '../../../state/mealsState'

export default function Elegance(props) {
    const { categories, products } = useMealsStore()
    const subCategories = [...categories]

    const [order, setOrder] = useState([])
    const [open, setOpen] = useState(false)

    const handleRemoveItem = (idx) => {
        const newOrder = order.filter((i) => {
            console.log(i === idx)
            return i.id !== idx
        })
        setOrder(newOrder)
    }

    return (
        <>
            <Head>
                <title>Elegance</title>
                <meta
                    name="description"
                    content="Headless CMS Theme - Wordpress - ELEGANCE"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/fonts/NanumMyeongjo-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/NanumMyeongjo-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin=""
                />
            </Head>

            <TopSection>
                <Logo>
                    <Image
                        src={LogoSrc}
                        width={165}
                        height={70}
                        alt="Logo Elegance"
                    />
                </Logo>
                <Overlay />
                <Image src={ImageTopSection} fill alt="Top Elegance Image" />
            </TopSection>

            <ProductsWrapper>
                {allCategories
                    .filter((category) => category.parent === 0)
                    .map((cat) => (
                        <div key={cat.id}>
                            <CategoryBackground>
                                <Title key={cat.id}>{cat.name}</Title>
                            </CategoryBackground>

                            <Wrapper>
                                <ListProducts>
                                    {products.filter(
                                        (p) =>
                                            p.categories[0] === cat.id &&
                                            p.categories.length === 1
                                    ).length !== 0 ? (
                                        products
                                            .filter(
                                                (p) =>
                                                    p.categories[0] ===
                                                        cat.id &&
                                                    p.categories.length === 1
                                            )
                                            .map((a, i) => (
                                                <div key={a.id}>
                                                    <h4>
                                                        <span>
                                                            {a.title.rendered}
                                                        </span>
                                                        <span>
                                                            {a.acf.preco}€
                                                        </span>
                                                    </h4>
                                                    <p>
                                                        {
                                                            a.acf
                                                                .descricao_do_produto
                                                        }{' '}
                                                    </p>
                                                    <button
                                                        onClick={() =>
                                                            setOrder([
                                                                ...order,
                                                                {
                                                                    id: a.id,
                                                                    name: a
                                                                        .title
                                                                        .rendered,
                                                                    price: a.acf
                                                                        .preco,
                                                                },
                                                            ])
                                                        }
                                                    >
                                                        Adicionar
                                                    </button>
                                                </div>
                                            ))
                                    ) : (
                                        <p>De momento não existem produto</p>
                                    )}
                                </ListProducts>

                                {subCategories
                                    .filter(
                                        (subcat) => subcat.parent === cat.id
                                    )
                                    .map((sub) => (
                                        <div key={sub.id}>
                                            <SubTitle>{sub.name}</SubTitle>

                                            <ListProducts>
                                                {products
                                                    .filter(
                                                        (post) =>
                                                            post
                                                                .categories[1] ===
                                                            sub.id
                                                    )
                                                    .map((a) => (
                                                        <div key={a.id}>
                                                            <SubProduct
                                                                title={
                                                                    a.title
                                                                        .rendered
                                                                }
                                                                slug={a.slug}
                                                                id={
                                                                    a.featured_media
                                                                }
                                                            />
                                                        </div>
                                                    ))}
                                            </ListProducts>
                                        </div>
                                    ))}
                            </Wrapper>
                        </div>
                    ))}
            </ProductsWrapper>
            <Footer>
                <Logo>
                    <Image
                        src={LogoSrc}
                        width={165}
                        height={70}
                        alt="Logo Elegance"
                    />
                </Logo>

                <Social>
                    <Facebook></Facebook>
                    <Instagram></Instagram>
                    <Twitter></Twitter>
                    <Youtube></Youtube>
                    <Tripadvisor></Tripadvisor>
                </Social>

                <Grid3>
                    <Section>
                        <h5>Morada:</h5>
                        <p>Sunset Blvd. 30, 90210</p>
                    </Section>

                    <Section>
                        <h5>Encomenda:</h5>
                        <p>Sunset Blvd. 30, 90210</p>
                    </Section>

                    <Section>
                        <h5>Horário:</h5>
                        <p>Segundas - Sexta</p>
                        <p>9:00h - 22:00h</p>
                        <hr />
                        <p>Sábados - Doming</p>
                        <p>11:00h - 21:00h</p>
                    </Section>
                </Grid3>
            </Footer>

            <OrderOnline
                target="_blank"
                href="https://glovoapp.com/pt/pt/aveiro/mcdonald-s-ave/"
            >
                GL
            </OrderOnline>

            <OrderOnline2 href="tel:912345678">CH</OrderOnline2>

            {order.length > 0 && (
                <Order className={open ? 'show' : ''}>
                    <h1 onClick={() => setOpen(!open)}>
                        {open ? 'Fechar' : 'Ver pedido'}{' '}
                        {!open && <span>{order.length}</span>}
                    </h1>

                    {order.map((item, index) => (
                        <li key={item.id}>
                            {item.name} --- {item.price}€
                            <button onClick={() => handleRemoveItem(item.id)}>
                                Remover
                            </button>
                        </li>
                    ))}
                </Order>
            )}
        </>
    )
}

Elegance.getLayout = function getLayout(page) {
    return <Themes>{page}</Themes>
}
