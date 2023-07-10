import React, { useCallback, useRef } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErros';
import api from '../../services/api';
import { ProductFormData } from '../../models'

import { Container, Header, Content } from './styles';

const CreateProduct: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ProductFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          quantity: Yup.string().required('Quantidade obrigatória'),
          value: Yup.string().required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          description,
          quantity,
          value,
        } = data;

        const formData = {
          name,
          description,
          quantity,
          value
        };

        await api.post(`/products`, formData);

        history.push('/');
        addToast({
          type: 'success',
          title: 'Produto cadastrado',
          description: 'O produto foi cadastrado com sucesso',
        });

        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err as Yup.ValidationError);

        formRef.current?.setErrors(errors);

        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Não foi possível cadastrar o produto',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </div>
      </Header>
      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>Cadastrar produto</h1>

          <Input name="name" type="text" placeholder="Nome" />
          <Input name="description" type="text" placeholder="Descrição" />
          <Input name="quantity" type="number" placeholder="Quantidade" />
          <Input name="value" type="number" step=".01" placeholder="Valor" />

          <Button type="submit">Salvar alterações</Button>
        </Form>
      </Content>
    </Container>
  );
};
export default CreateProduct;
