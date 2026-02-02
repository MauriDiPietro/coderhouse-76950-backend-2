import { v4 as uuid } from "uuid";
import { orderRepository } from "../repositories/order-repository.js";
import { businessService } from "../services/business-service.js";
import { userService } from "../services/user-service.js";


class OrderService {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async () => {
    try {
      return await this.repository.getAllOrders();
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
    try {
      return await this.repository.getOrderById(id);
    } catch (error) {
      throw error;
    }
  };

  create = async (body) => {
    try {
      const { usuarioId, negocioId, items } = body;
      const negocio = await businessService.getById(negocioId);

      const productosPedido = [];
      let precioTotal = 0;

      for (const item of items) {
        const prod =
          negocio.productos.id(item.productId) ||
          negocio.productos.find((p) => p._id.toString() === item.productId);

        if (!prod) throw new Error("Producto no encontrado en el negocio");

        if (prod.stock < item.cantidad)
          throw new Error("No hay suficiente stock");

        prod.stock = prod.stock - item.cantidad;

        const itemPrecio = prod.precio * item.cantidad;

        precioTotal += itemPrecio;

        productosPedido.push({
          productId: prod._id,
          nombre: prod.nombre,
          precioUnitario: prod.precio,
          cantidad: item.cantidad,
        });
      }

      await businessService.update(negocioId, { productos: negocio.productos });

      const order = await this.repository.create({
        numeroOrden: uuid(),
        negocio: negocioId,
        usuario: usuarioId,
        productos: productosPedido,
        precioTotal,
      });

      await userService.addOrderToUser(usuarioId, order._id);

      return order;
    } catch (error) {
      throw error;
    }
  };
}

export const orderService = new OrderService(orderRepository);
