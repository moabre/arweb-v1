import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  padding-top: 5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  font-size: 3rem;
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const ProjectContainer = styled.div`
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 800px;
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;
  margin: auto 0;
  justify-content: center;
  justify-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 1200px !important;
`;

export const Projects = styled.div`
  background-color: '#fff';
  margin: auto 0 auto 0;
  max-width: 450px;
  box-shadow: 0 5px 30px 15px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  &:hover {
    box-shadow: 0 5px 30px 15px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
  & > img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 0 0 auto 0;
    border-radius: 0.5rem;
    box-shadow: 0 5px 30px 15px rgba(0, 0, 0, 0.2);
    width: 100%;
    cursor: pointer;
  }

  & > h1 {
    padding: 0.5rem 0;
    background-image: linear-gradient(90deg, #000 33%, hsla(0, 0%, 100%, 0) 0);
    background-position: bottom;
    background-size: 8px 1px;
    background-repeat: repeat-x;
  }
  & > span {
    padding: 1.6rem;
    text-align: justify;
  }
  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;
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
    box-shadow: 0 5px 30px 15px rgba(0, 0, 0, 0.1);
  }

  & > div > a:hover {
    color: #01bf71;
    transform: scale(1.01);
    font-size: 1.3rem;
    background-color: black;
  }
`;
