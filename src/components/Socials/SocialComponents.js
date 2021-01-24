import styled from 'styled-components';
export const SocialWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px 0 40px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 65%,
    rgba(8, 1, 1, 1) 100%
  );

  & > a > img {
    width: 50px;
    height: 50px;
    margin: 10px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  & > a > img:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    cursor: pointer;
  }

  & > span {
    color: grey;
  }
`;
