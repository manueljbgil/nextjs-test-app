import Head from "next/head";
import SubProduct from "../components/SubProduct";
import ImageTopSection from "../public/bg-top-section.jpg";
import LogoSrc from "../public/extra-logo-white.png";
import Image from "next/image";
import styled from "styled-components";

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

export default function Home(props) {
  const { allCategories, allPosts } = props;

  console.log(allPosts);

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
        <link
          rel="preload"
          href="/fonts/HindSiliguri-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/HindSiliguri-Regular.ttf"
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
        {allCategories
          .filter((category) => category.parent === 0)
          .map((cat) => (
            <div key={cat.id}>
              <CategoryBackground>
                <Title key={cat.id}>{cat.name}</Title>
              </CategoryBackground>

              <Wrapper>
                <ListProducts>
                  {allPosts.filter(
                    (p) =>
                      p.categories[0] === cat.id && p.categories.length === 1
                  ).length !== 0 ? (
                    allPosts
                      .filter(
                        (p) =>
                          p.categories[0] === cat.id &&
                          p.categories.length === 1
                      )
                      .map((a, i) => (
                        <div key={a.id}>
                          <h4>
                            <span>{a.title.rendered}</span>
                            <span>{a.acf.preco}€</span>
                          </h4>
                          <p>{a.acf.descricao_do_produto} </p>
                        </div>
                      ))
                  ) : (
                    <p>De momento não existem produto</p>
                  )}
                </ListProducts>

                {subCategories
                  .filter((subcat) => subcat.parent === cat.id)
                  .map((sub) => (
                    <div>
                      <SubTitle key={sub.id}>{sub.name}</SubTitle>

                      <ListProducts>
                        {allPosts
                          .filter((post) => post.categories[1] === sub.id)
                          .map((a) => (
                            <div key={a.id}>
                              <SubProduct
                                title={a.title.rendered}
                                slug={a.slug}
                                id={a.featured_media}
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

const ProductsWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  position: relative;
  background-image: url("./public/bg-home-3_1.jpg");
  margin-bottom: 300px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 40px 0 20px;
  color: #333;
  position: relative;
  font-weight: 400;
  z-index: 3;
  font-family: "Nanum-Regular";
  font-size: 48px;
`;

const CategoryBackground = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  padding-top: 50px;
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

const Wrapper = styled.div`
  max-width: 840px;
  margin: 0px auto;
  text-align: left;
`;
const SubTitle = styled.h3`
  position: relative;
  font-size: 26px;

  &:before {
    content: "";
    position: absolute;
    height: 3px;
    width: 30px;
    background: #ff8c25;
    bottom: -13px;
    left: -12px;
  }
`;

const ListProducts = styled.div`
  padding: 20px 15px 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  > p {
    color: #999;
    font-size: 18px;
    font-family: "Hind-Light";
    font-weight: 400;
  }

  > div {
    > h4 {
      color: #333;
      font-family: "Nanum-Regular";
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 14px;
      display: flex;
      justify-content: space-between;
      position: relative;

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        top: 10px;
        background-image: linear-gradient(
          to right,
          #b98d58 33%,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: bottom;
        background-size: 3px 1px;
        background-repeat: repeat-x;
      }

      > span {
        font-weight: 700;
        background-color: #fff;
        padding: 0 10px;
        position: relative;
        z-index: 2;
        :first-of-type {
          font-weight: 400;
          padding: 0 10px 0 0;
        }
      }
    }

    > p {
      color: #999;
      font-size: 14px;
      font-family: "Hind-Light";
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 0;
    }
  }

  &:empty {
    padding: 0;
  }

  > a {
    padding: 10px 0;
    color: #333;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    text-decoration: none;
    width: 100%;
    border-bottom: 1px solid #eaeaea;

    &:hover {
      border-bottom: 1px solid #333;
    }
  }
`;
