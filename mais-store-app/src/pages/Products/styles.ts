import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;

  p {
    color: #555555;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #555555;
  background: #fff;
  border-radius: 5px;
  margin: 20px 12px;
  padding: 20px;
  width: 435px;
  height: 180px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

  strong {
    margin-bottom: 8px;
  }

  p {
    font-size: 15px;
  }
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0c3d5f;
  color: #ffffff;
  height: 35px;
  border-radius: 8px;
  border: 0;
  padding: 16px;
  font-weight: 500;
  width: 100px;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#053b61')};
  }
`;
