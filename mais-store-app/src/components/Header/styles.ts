import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0;
  background: #f0f0f0;
`;

export const Content = styled.div`
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
    color: #555555;
  }

  span {
    color: #555555;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;

  span {
    color: #555;
  }

  a {
    text-decoration: none;

    strong,
    span {
      color: #555;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
