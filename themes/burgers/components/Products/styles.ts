import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
export const BoldText = styled.p`
  font-family: "Khand-Bold";
  font-size: 28px;
  color: white;
  text-align: center;
  width: 100%;
  min-width: 300px;
`;
export const ProductInfo = styled.div`
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
`;

// todo: fix this
// export const CustomButton = styled(IconButton)`
//     margin: -11px;
//     color: ${(props) => props.theme.fg} !important;
// `

export const CustomImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ProductTitle = styled.p`
  font-family: "Khand-Bold";
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin-bottom: 0px;
  &:hover {
    color: ${(props) => props.theme.fg};
  }
`;

export const ProductDescription = styled.p`
  font-size: 12px;
  margin-bottom: 0px;
`;

export const ProductPrice = styled.p`
  font-family: "Khand-Bold";
  font-size: 18px;
`;
