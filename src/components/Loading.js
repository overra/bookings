import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

export default styled.div`
  display: inline-block;
  position: relative;
  margin: 0 8px;
  width: ${props => props.size || 16}px;
  height: ${props => props.size || 16}px;

  &::after {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    animation: ${spin} 1s linear infinite;
    border: 2px #000 solid;
    border-top-color: rgba(0, 0, 0, 0.25);
    border-left-color: rgba(0, 0, 0, 0.5);
    border-bottom-color: rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    width: ${props => props.size || 16}px;
    height: ${props => props.size || 16}px;
  }
`;
