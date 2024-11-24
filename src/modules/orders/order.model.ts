import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      validate:{
        validator:function(value:string){
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        },
        message:"{VALUE} is invalid. Email. Please provide valid Email"
      },
      
    },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Order = model<TOrder>('Order', orderSchema);
