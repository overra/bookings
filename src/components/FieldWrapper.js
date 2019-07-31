import styled from "styled-components";

export default styled.div`
  display: flex;
  ${props => (props.gutterBottom ? `margin-bottom: 12px;` : "")}
  flex-direction: ${props => (props.horizontalLabel ? "row" : "column")};
  align-items: ${props => (props.horizontalLabel ? "center" : "flex-start")};
  & label {
    ${props => (props.horizontalLabel ? "margin-right: 8px;" : "")}
  }
`;
