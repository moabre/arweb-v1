import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  background-color: black;
  text-align: center;
  padding: 5rem 1rem 2rem 1rem;
  font-size: 3rem;
  border-bottom: 3px solid #01bf71;
  &:hover {
    color: #01bf71;
  }
`;

export const Background = styled.div`
  background-color: black;
  width: 100vw;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  color: white;
  padding: 1rem;

  & > form {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  & > form > label {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  & > form > input {
    width: 100%;
    height: 30px;
    color: black;
    border: none;
  }

  & > form > textarea {
    width: 100%;
    height: 80px;
    margin-bottom: 1rem;
    border: none;
  }

  & > form > div {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }

  & > form > div > button {
    width: 150px;
    height: 50px;
    border-radius: 50px;
    border: none;
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #000;
    background-color: #fff;
  }
  & > form > div > button:hover {
    cursor: pointer;
  }
`;

export const Greeting = styled.span`
  color: white;
  font-size: 1.8rem;
  text-align: center;
  padding: 2rem;
`;
