import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const response = await Order.create(orderData);
  return response;
};
const totalRevenue = async () => {
  // const response = await Order.aggregate([
  //   {
  //     $addFields: {
  //       price:{$multiply:["$quantity","$totalPrice"]}
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: "null",
  //       revenue:{$sum:"$price"}
  //     },
  //   },
  //   {
  //     $project:{
  //       totalRevenue: "$revenue",
  //       _id: 0
  //     }
  //   }

  // ]);
  const response = await Order.aggregate([
    {
      $group: {
        _id: 'null',
        revenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        totalRevenue: '$revenue',
        _id: 0,
      },
    },
  ]);
  return response[0] ? response[0] : { totalRevenue: 0 };
};

export const orderServices = {
  createOrder,
  totalRevenue,
};
