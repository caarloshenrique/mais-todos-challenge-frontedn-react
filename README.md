<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/caarloshenrique/mais-todos-challenge-frontend-react?color=%2304D361">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/caarloshenrique/mais-todos-challenge-frontend-react">
  <a href="https://github.com/caarloshenrique/mais-todos-challenge-frontend-react/master">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/caarloshenrique/mais-todos-challenge-frontend-react/master">
  </a>
  <a href="https://www.linkedin.com/in/carlos-henrique-costa-silva/">
    <img alt="Made by Carlos Henrique" src="https://img.shields.io/badge/made%20by-caarloshenrique-%2304D361">
  </a>
  <a href="https://github.com/caarloshenrique/mais-todos-challenge-frontend-react/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/caarloshenrique/mais-todos-challenge-frontend-react">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/caarloshenrique/mais-todos-challenge-frontend-react">
</p>

<p align="center">
 <img height="300" alt="MaisStore" src="/assets/shopping.png">
</p>

<h2 align="center">:gift: MaisStore: um marketplace de produtos da MaisTodos</h2>

<p align="center">
  <a href="#computer-sobre-o-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#dart-o-que-pode-ser-melhorado">Melhorias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-pré-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-executando-a-aplicação">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-licença">Licença</a>
</p>

## :computer: Sobre o projeto

MaisStore é um desafio proposto pela MaisTodos. O desafio propõe o desenvolvimento de aplicação web para gerenciar produtos.

## :gear: Funcionalidades

<p>:white_check_mark: Cadastro de produtos;</p>
<p>:white_check_mark: Listagem de produtos;</p>
<p>:white_check_mark: Edição de produtos;</p>
<p>:white_check_mark: Exclusão de produtos.</p>

## :dart: O que pode ser melhorado?

<p>:pushpin: Implementação do carrinho de compras com gerenciamento de estados;</p>
<p>:pushpin: Integração com a API de pagamentos;</p>
<p>:pushpin: Utilização de react-query para compartilhamento de dados;</p>
<p>:pushpin: Implementação de testes end to end para as páginas;</p>

_Observação_: alguns itens não foram implementados por falta de tempo hábil.

## :rocket: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [SQLite 3](https://www.sqlite.org/index.html)
- [KnexJS](http://knexjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [Unform](https://github.com/unform/unform)

## :clipboard: Pré-requisitos

Para executar esta aplicação em seu dispositivo no modo de desenvolvimento você precisará ter as seguintes dependências devidamente instaladas e configuradas:

- [NodeJS LTS (ou superior)](https://nodejs.org/en/)

## :zap: Executando a aplicação

### :bug: Back-end

Acessando a o repositório do Back-end

```
cd mais-store-api
```

Instalando as dependências do projeto

```
npm install
```

Criando a estrutura do banco de dados

```
npm run knex:migrate
```

Alimentando o banco de dados com produtos pré-cadastrados

```
npm run knex:seed
```

Executando a aplicação

```
npm run dev
```

### :art: Front-end

Acessando a o repositório do Back-end

```
cd mais-store-app
```

Instalando as dependências do projeto

```
yarn
```

Executando a aplicação

```
yarn start
```

## :page_facing_up: Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :blue_heart: por <strong> Carlos Henrique da Costa Silva </strong> </p>
