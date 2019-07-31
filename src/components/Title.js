import styled from "styled-components";

export default styled.h1`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0;
  font-family: Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1.92px;
  ${props => (props.gutterBottom ? "margin-bottom: 16px;" : "")}
`;
