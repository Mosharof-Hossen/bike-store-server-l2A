import { model, Schema } from 'mongoose';
import { TBike } from './bike.interface';

const bikeSchema = new Schema<TBike>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      required: true,
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Bike = model<TBike>('Product', bikeSchema);
export default Bike;
