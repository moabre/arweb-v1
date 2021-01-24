import styled, { keyframes } from 'styled-components';
import { BsArrowDownShort, BsArrowDown } from 'react-icons/bs';

//keyframe animations
const typewriter = keyframes`
     from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

//component styles

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Img = styled.img`
  width: 50vw;
  max-width: 250px;
  min-width: 200px;
  border-radius: 100%;
`;

export const Type = styled.p`
  display: flex;
  &.bold {
    color: #01bf71;
    display: inherit;
    font-weight: bold;
    margin-right: 3px;
    margin-left: 3px;
    @media screen and (max-width: 343px) {
      font-size: 12px;
    }
  }
  &.location {
    color: #01bf71;
    display: inherit;
    font-weight: bold;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem;
  @media screen and (max-width: 343px) {
    font-size: 12px;
  }
`;

export const H1 = styled.h1`
  color: black;
  font-size: 2.5rem;
`;

export const Span = styled.span`
  color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  animation-timing-function: ease-in-out;
  animation: ${typewriter} 5s;

  & > p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Typedout = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Carry = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;

  & > p {
    margin-right: 5px;
  }
`;
const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const CursorSpan = styled.span`
  font-weight: 100;
  color: black;
  font-size: 1em;
  padding-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 232px;
  max-height: 40px;
  width: 232px;
  height: 5vh;
  font-size: 1.2rem;
  animation-timing-function: ease-in-out;
  animation: ${typewriter} 5s;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    background: black;
    transition: 0.2s ease-in-out;
    font-size: 1.2rem;
    height: 8vh;
    border-style: none;
  }
`;
export const ArrowDown = styled(BsArrowDown)`
  margin-left: 8px;
  font-size: 1.3rem;
`;
export const ArrowDownShort = styled(BsArrowDownShort)`
  margin-left: 8px;
  font-size: 20px;
`;
