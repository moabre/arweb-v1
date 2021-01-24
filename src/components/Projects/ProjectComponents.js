import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  padding-top: 3rem;
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 3rem;
`;
export const ProjectContainer = styled.div`
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 800px;
  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
  grid-gap: 3rem;
  margin-top: 2rem;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  max-width: 1200px !important;
  /* @media screen and (min-width: 768px) {
    max-height: 600px !important;
  } */
`;

export const Projects = styled.div`
  background-color: '#fff';
  margin: auto 0;
  max-width: 700px;
  box-shadow: 0 5px 30px 15px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  &:hover {
    box-shadow: 0 5px 30px 15px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
  & > img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0.5rem;
    box-shadow: 0 5px 30px 15px rgba(0, 0, 0, 0.2);
    height: 350px;
    max-width: 100%;
  }

  & > h1 {
    padding: 0.5rem 0;
    background-image: linear-gradient(90deg, #000 33%, hsla(0, 0%, 100%, 0) 0);
    background-position: bottom;
    background-size: 8px 1px;
    background-repeat: repeat-x;
  }
  & > span {
    padding-top: 0.5rem;
    height: 130px;
    text-align: justify;
    padding: 0.5rem;
  }
  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 30px;
    padding-bottom: 1rem;
  }

  & > div > a {
    color: black;
    width: 25%;
    padding: 1rem;
    align-self: center;
    text-align: center;
    border: 0.5px solid black;
    font-size: 1rem;
    border-radius: 0.25rem;
  }

  & > div > a:hover {
    color: #01bf71;
    transform: scale(1.01);
    font-size: 1.3rem;
  }
`;
