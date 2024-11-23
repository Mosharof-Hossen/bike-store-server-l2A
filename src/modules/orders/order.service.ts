import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const response = await Order.create(orderData);
  return response;
};

export const orderServices = {
  createOrder,
};
