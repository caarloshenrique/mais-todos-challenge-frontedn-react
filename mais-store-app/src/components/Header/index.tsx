import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, Info } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <strong>MaisStore</strong>
          <Info>
            <Link to="/create-product">
              <span>Cadastrar produto</span>
            </Link>
          </Info>
      </Content>
    </Container>
  );
};

export default Header;
