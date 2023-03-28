import styled from "styled-components";

export const AddedItemsList = styled.div`
  height: 80%;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    font-family: "Khand-Bold";
    font-size: 18px;
    color: ${(props) => props.theme.bg};
    margin: 6px;
  }
`;

export const Price = styled.p`
  font-family: "Khand-Bold";
  font-size: 18px;
  color: ${(props) => props.theme.bg};
  margin: 6px;
`;

export const VirtualCart = styled.div<{ show: boolean }>`
  background-color: ${(props) => props.theme.fg};
  width: ${({ show }) => (show ? "90%" : "45px")};
  height: ${({ show }) => (show ? "90vh" : "45px")};
  position: fixed;
  right: ${({ show }) => (show ? "50%" : "40px")};
  bottom: ${({ show }) => (show ? "50%" : "40px")};
  transform: translate(50%, 50%);
  transition: right 0.2s ease-out, bottom 0.2s ease-out;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Khand-Bold";
  font-size: 25px;
`;
