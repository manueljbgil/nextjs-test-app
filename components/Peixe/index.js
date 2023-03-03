import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Peixe() {
  const BASE_URL = "https://endpoints.flaviamiranda.pt/wp-json/wp/v2/";
  const POSTS =
    BASE_URL + "produtos?categories=6&per_page=100&orderby=id&order=asc";
  const CATEGORY_ENDPOINT = BASE_URL + "categories/6";

  const [allPosts, setAllPosts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(CATEGORY_ENDPOINT)
      .then((res) => res.json())
      .then((response) => setCategory(response));
    fetch(POSTS)
      .then((res) => res.json())
      .then((response) => setAllPosts(response));
  }, []);

  return (
    <>
      <ProductsWrapper>
        <div>
          <CategoryBackground>
            <Title key={category.id}>{category.name}</Title>
          </CategoryBackground>

          <Wrapper>
            <ListProducts>
              {allPosts.map((a, i) => (
                <div key={a.id}>
                  <h4>
                    <span>{a.title.rendered}</span>
                    <span>{a.acf.preco}€</span>
                  </h4>
                  <p>{a.acf.descricao_do_produto} </p>
                </div>
              ))}
            </ListProducts>
          </Wrapper>
        </div>
      </ProductsWrapper>
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
