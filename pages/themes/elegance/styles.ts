import styled from "styled-components";

export const Order = styled.ul`
  position: fixed;
  bottom: -16px;
  height: auto;
  left: 0;
  width: 100%;
  background-color: #eee;
  color: #333;
  padding: 0;
  padding-left: 20px;
  list-style: none;
  overflow-y: auto;
  z-index: 9;
  max-height: 80px;
  padding-top: 20px;

  > h1 {
    display: flex;
    margin-top: 0;
    cursor: pointer;
    span {
      border-radius: 50px;
      padding: 3px 6px;
      font-size: 10px;
      color: #fff;
      background-color: orange;
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 16px;
    }
  }

  > li {
    padding: 15px 0;
    width: calc(100% - 90px);
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #ccc;

    button {
      border: none;
      font-size: 14px;
      color: #333;
    }
  }

  &.show {
    height: 100vh;
    padding: 16px;
    top: -16px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const OrderOnline = styled.a`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderOnline2 = styled(OrderOnline)`
  bottom: 80px;
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 800px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Social = styled.div`
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

export const Facebook = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;

export const Instagram = styled(Facebook)``;

export const Youtube = styled(Facebook)``;

export const Twitter = styled(Facebook)``;

export const Tripadvisor = styled(Facebook)``;

export const Section = styled.div`
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

export const Footer = styled.footer`
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 0;
`;

export const Logo = styled.div`
  position: relative;
  z-index: 3;

  > img {
    object-fit: contain;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ProductsWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  position: relative;
  background-image: url("./public/bg-home-3_1.jpg");
  margin-bottom: 300px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 40px 0 20px;
  color: #333;
  position: relative;
  font-weight: 400;
  z-index: 3;
  font-family: "Nanum-Regular";
  font-size: 48px;
`;

export const CategoryBackground = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  padding-top: 50px;
`;

export const TopSection = styled.div`
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

export const Wrapper = styled.div`
  max-width: 840px;
  margin: 0px auto;
  text-align: left;
`;
export const SubTitle = styled.h3`
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

export const ListProducts = styled.div`
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

  button {
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 16px;
    background: #333;
    color: #fff;
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
