import styled from "styled-components";

export const MenuWrapper = styled.div``;

export const Menu = styled.ul`
  text-align: center;
  list-style-type: none;
  padding-inline-start: 0;
  padding: 0px 20px 20px;
`;

export const MenuItem = styled.li`
  display: inline-block;
  color: white;
  font-family: "Khand-Bold";
  margin: 8px 12px;
  padding: 4px 0px;
  cursor: pointer;
  letter-spacing: 1.5px;
  border-bottom: 1px solid ${(props) => props.theme.bg};
  &:hover {
    color: ${(props) => props.theme.fg};
    border-bottom: 1px solid ${(props) => props.theme.fg};
    /* Apply to all changed properties */
    transition: color 0.2s linear, border 0.2s linear;
  }
`;

export const Title = styled.div`
  height: 180px;
  padding: 20px 0px 0px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
