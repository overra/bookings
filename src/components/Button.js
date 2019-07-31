import styled from "styled-components";

export default styled.button`
  padding: 8px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  background-color: #f29648;
  font-size: 14px;
  letter-spacing: 1.12px;
  cursor: pointer;
  &[disabled] {
    cursor: auto;
  }
`;
