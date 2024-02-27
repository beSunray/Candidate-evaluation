import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ItemSchema = new Schema({
  text: String
});

const WindowSchema = new Schema({
  name: String,
  count: { type: Number, default: 0 },
  items: [ItemSchema]
});

export default model('Window', WindowSchema);
