import styled, { keyframes, css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid red;
`;

const AnimatedFloating = keyframes`
  from {
    //transform: translateY(0%);
    transform: translateY(0%) scale(0.1);
  }
  to {
    transform: translateY(100%) scale(1);
  }
`;

const Show = css`
  display: inline;
  animation-direction: normal; 
  z-index: 101;
`;

export const ToggleFloating = styled.div`
  display: none;
  position: absolute;
  /* right: 0; */
  /* left: 0; */
  bottom: 0;
  animation-direction: reverse;
  animation: ${AnimatedFloating} 0.1s linear both;
  
  @media (prefers-reduced-motion) {
    animation: none;
    transform: translateY(100%) scale(1);
  }
  
  width: ${({width}) => width ? width : '200px'};
  
  ${({ show }) => show && Show}
`;

export const Rotate = css`
  transform: rotate(180deg);
`;

const ShowAboveMask = css`
  z-index: 101;
`;

export const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  
  svg {
    height: 15px;
    fill: white;
    transition: transform 0.2s ease-in-out;
    transform: rotate(0deg);
    
    ${({ rotate }) => rotate && Rotate};
  }
  
  ${({ rotate }) => rotate && ShowAboveMask};
`;

const ShowMask = css`
  display: inline;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const FloatingMask = styled.div`
  display: none;
  ${({show}) => show && ShowMask}
`;
