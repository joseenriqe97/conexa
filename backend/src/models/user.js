
import { model, Schema } from 'mongoose';

// Mongoose schema
export const userSchema = Schema(
 {
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
 }
);
export const userModel = model('User', userSchema);