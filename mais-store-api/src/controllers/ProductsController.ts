import { Request, Response } from "express";
import knex from "../database/connection";

class ProductsController {
  async index(request: Request, response: Response) {
    const products = await knex("products").select("products.*");

    return response.json(products);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const product = await knex("products").where("id", id).first();

    if (!product) {
      return response.status(400).json({ message: "Product not found." });
    }

    return response.json({ product: product });
  }

  async create(request: Request, response: Response) {
    const { name, description, quantity, value } = request.body;

    const trx = await knex.transaction();

    const product = {
      name,
      description,
      quantity,
      value,
    };

    const insertedIds = await trx("products").insert(product);

    const product_id = insertedIds[0];

    await trx.commit();

    return response.json({
      id: product_id,
      ...product,
    });
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { name, description, quantity, value } = request.body;

    const trx = await knex.transaction();

    const productToUpdate = {
      name,
      description,
      quantity,
      value,
    };

    await trx("products").where("id", id).update(productToUpdate);

    const product = productToUpdate;

    const product_id = id;

    await trx.commit();

    return response.json({
      id: product_id,
      ...product,
    });
  }

  async updateQuantity(request: Request, response: Response) {
    const { id } = request.params;

    const { quantity } = request.body;

    const trx = await knex.transaction();

    const productToUpdate = {
      quantity,
    };

    await trx("products").where("id", id).update(productToUpdate);

    const product = productToUpdate;

    const product_id = id;

    await trx.commit();

    return response.json({
      id: product_id,
      ...product,
    });
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const trx = await knex.transaction();

      await trx("products").where("id", id).first().delete();

      await trx.commit();

      return response.status(200).json();
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default ProductsController;
