import express from "express";
import { celebrate, Joi } from "celebrate";

import ProductsController from "./controllers/ProductsController";

const routes = express.Router();

const productsController = new ProductsController();

routes.post(
  "/products",
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        quantity: Joi.number().required(),
        value: Joi.number().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  productsController.create
);

routes.get("/products", productsController.index);

routes.get("/products/:id", productsController.show);

routes.put(
  "/products/:id",
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        quantity: Joi.number().required(),
        value: Joi.number().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  productsController.update
);

routes.put(
  "/products/:id/quantity",
  celebrate(
    {
      body: Joi.object().keys({
        quantity: Joi.number().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  productsController.updateQuantity
);

routes.delete("/products/:id", productsController.delete);

export default routes;
