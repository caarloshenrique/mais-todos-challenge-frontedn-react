import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Products from '../pages/Products';
import CreateProduct from '../pages/CreateProduct';
import UpdateProduct from '../pages/UpdateProduct';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Products} />
      <Route path="/create-product" component={CreateProduct} />
      <Route path="/update-product" component={UpdateProduct} />
    </BrowserRouter>
  );
};

export default Routes;
