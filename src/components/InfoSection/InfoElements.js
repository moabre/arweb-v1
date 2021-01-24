import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 800px;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
  justify-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 600px !important;
  @media screen and (min-width: 768px) {
    max-height: 900px !important;
  }
  & > a > img {
    display: flex;
    height: 100%;
    width: 100%;
    min-width: 80px;
    min-height: 80px;
    max-width: 200px;
    max-height: 200px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  & > a > img:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    cursor: pointer;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 1rem;
  @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  padding: 2rem;
  justify-self: center;
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  &:hover {
    color: #01bf71;
  }
`;

export const TitleContent = styled.p`
  font-size: 1.7rem;
  padding: 1rem;
  max-height: 600px;
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  &.content {
    justify-self: center;
    text-align: justify;
    margin: auto 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-self: flex-start;
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
  font-size: 1.4rem;
  margin: 3rem;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    background: black;
    transition: 0.2s ease-in-out;
    font-size: 1.5rem;
    height: 8vh;
    border-style: none;
  }
`;
