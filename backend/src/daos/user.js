import { userModel } from '../models';

export const createUser = async (userData) => await new userModel(userData).save();

export const isExistUser = async (userEmail) => await userModel.findOne({ "email": userEmail });