import styled from "styled-components";

export const Info = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
