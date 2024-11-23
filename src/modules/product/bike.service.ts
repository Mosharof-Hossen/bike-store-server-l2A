import { TBike } from './bike.interface';
import Bike from './bike.model';

const createBikeItem = async (bikeData: TBike) => {
  const result = await Bike.create(bikeData);
  return result;
};

const getAllBikes = async()=>{
    const result = await Bike.find();
    return result;
}

export const bikeServices = {
  createBikeItem,
  getAllBikes,
};
