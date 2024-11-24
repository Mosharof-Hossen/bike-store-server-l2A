import { Request, Response } from 'express';
import config from '../../config';
import { bikeServices } from '../product/bike.service';
import { orderServices } from './order.service';
// import { TOrder } from './order.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    const bike = await bikeServices.getSingleBike(product);
    // console.log(bike);

    if (!bike) {
      return res.status(404).json({
        status: false,
        message: 'Bike not found',
      });
    }
    if (bike?.quantity < quantity) {
      return res.status(404).json({
        status: false,
        message: `Insufficient stock. Only ${bike.quantity} item(s) left.`,
      });
    }

    bike.quantity = bike.quantity - quantity;
    if (bike.quantity === 0) {
      bike.inStock = false;
    }
    await bike.save();

    const order = await orderServices.createOrder({
      email,
      product,
      quantity,
      totalPrice,
    });

    res.status(200).json({
      status: true,
      message: 'Order created successfully',
      data: order,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: 'Failed to place order',
      error: err,
      stack: config.node_env == 'development' ? err.stack : undefined,
    });
  }
};

const findRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.totalRevenue();
    res.status(200).json({
      status: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: 'Failed to place order',
      error: err,
      stack: config.node_env == 'development' ? err.stack : undefined,
    });
  }
};

export const OrderController = {
  createOrder,
  findRevenue,
};
