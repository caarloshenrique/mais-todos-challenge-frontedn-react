import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 96px;
  background: #f0f0f0;

  display: flex;
  align-items: center;

  div {
    width: 100%;
    margin: 0 30px;

    svg {
      color: #999591;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  form {
    margin: 80px 0;
    width: 540px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
      color: #555555;
    }
  }
`;
