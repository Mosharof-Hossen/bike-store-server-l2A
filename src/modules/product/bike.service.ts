import { TBike } from './bike.interface';
import Bike from './bike.model';

const createBikeItem = async (bikeData: TBike) => {
  const result = await Bike.create(bikeData);
  return result;
};

const getAllBikes = async (query: object) => {
  const result = await Bike.find(query).select('-__v');
  return result;
};
const getSingleBikes = async (id: string) => {
  const result = await Bike.findById(id).select('-__v');
  return result;
};

export const bikeServices = {
  createBikeItem,
  getAllBikes,
  getSingleBikes,
};
