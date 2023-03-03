import Head from "next/head";
// import SubProduct from "../components/SubProduct";
import ImageTopSection from "../public/bg-top-section.jpg";
import LogoSrc from "../public/extra-logo-white.png";
import Image from "next/image";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Entradas = dynamic(() => import("../components/Entradas"));

const Pratos = dynamic(() => import("../components/Pratos"));

const Carne = dynamic(() => import("../components/Carne"));

const Bebidas = dynamic(() => import("../components/Bebidas"), {
  loading: () => "Loading...",
});

const Vinhos = dynamic(() => import("../components/Vinhos"), {
  loading: () => "Loading...",
});

const Peixe = dynamic(() => import("../components/Peixe"), {
  loading: () => "Loading...",
});

const Sobremesas = dynamic(() => import("../components/Sobremesas"), {
  loading: () => "Loading...",
});

const Vegan = dynamic(() => import("../components/Vegan"), {
  loading: () => "Loading...",
});
const Pastas = dynamic(() => import("../components/Pastas"), {
  loading: () => "Loading...",
});

const Pizzas = dynamic(() => import("../components/Pizzas"), {
  loading: () => "Loading...",
});

export async function getStaticProps() {
  const BASE_URL = "http://endpoints.flaviamiranda.pt/wp-json/wp/v2/";
  const POSTS = BASE_URL + "produtos?per_page=100&orderby=id&order=asc";
  const CATEGORIES = BASE_URL + "categories?per_page=50&orderby=id";

  const catD = await fetch(CATEGORIES);
  const allCategories = await catD.json();

  const postsD = await fetch(POSTS);
  const allPosts = await postsD.json();

  return {
    props: {
      allCategories: allCategories,
      allPosts: allPosts,
    },
  };
}

export default function Lazy(props) {
  const { allCategories, allPosts } = props;
  const subCategories = [...allCategories];

  return (
    <>
      <Head>
        <title>Elegance</title>
        <meta
          name="description"
          content="Headless CMS Theme - Wordpress - ELEGANCE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <Image src={LogoSrc} width={165} height={70} alt="Logo Elegance" />
        </Logo>
        <Overlay />
        <Image src={ImageTopSection} fill alt="Top Elegance Image" />
      </TopSection>

      <ProductsWrapper>
        <Entradas />
        <Pratos />
      </ProductsWrapper>
      {/* <Carne />
      <Peixe />
      <Vegan />
      <Pastas />
      <Pizzas />
      <Bebidas />
      <Vinhos />
      <Sobremesas /> */}

      <Footer>
        <Logo>
          <Image src={LogoSrc} width={165} height={70} alt="Logo Elegance" />
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
    </>
  );
}

const ProductsWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  position: relative;
  background-image: url("./public/bg-home-3_1.jpg");
  margin-bottom: 300px;
`;
const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 800px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  margin-top: 40px;
  margin-bottom: 40px;
  justify-items: center;
  padding: 0 16px;

  @media (min-width: 768px) {
    width: 420px;
    padding: 0;
    gap: 24px;
  }
`;

const Facebook = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const Instagram = styled(Facebook)``;

const Youtube = styled(Facebook)``;

const Twitter = styled(Facebook)``;

const Tripadvisor = styled(Facebook)``;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  > h5 {
    font-family: "Nanum-Regular";
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 14px;
    color: #fff;
  }

  > p {
    color: #999;
    font-size: 14px;
    font-family: "Hind-Light";
    font-weight: 400;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 0;
`;

const Logo = styled.div`
  position: relative;
  z-index: 3;

  > img {
    object-fit: contain;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const TopSection = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: cover !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
  }
`;
