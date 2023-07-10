import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import {
  Container,
  Content,
  ProductCard,
  ProductData,
  ProductActions,
  ProductButton
} from './styles';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import formatCurrency from '../../utils/formatCurrency';
import { Product } from '../../models';

const Products: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts (): Promise<void> {
    const { data } = await api.get('/products')
    setProducts(data)
  }

  async function handleUpdateProduct(product: Product): Promise<void> {
    history.push('/update-product', { product });
  }

  async function handleDeleteProduct(productId: number): Promise<void> {
    try {
      await api.delete(`/products/${productId}`)

      getProducts()
    } catch {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Não foi possível deletar o produto',
      });
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        { products.length === 0 && (
          <p>Nenhum produto cadastrado</p>
        )}
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductData>
              <strong>{product.name}</strong>
              <p>{product.quantity} em estoque</p>
              <p>{formatCurrency(product.value)}</p>
            </ProductData>
            <ProductActions>
              <ProductButton onClick={() => handleUpdateProduct(product)}>
                Editar
              </ProductButton>
              <ProductButton onClick={() => handleDeleteProduct(product.id)}>
                Excluir
              </ProductButton>
            </ProductActions>
          </ProductCard>
        ))}
      </Content>
    </Container>
  );
};

export default Products;
