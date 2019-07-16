import {Document, model, Schema,} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import {Fastfood} from './dto/fastfood.interface';

interface FastfoodDocument extends Fastfood, Document {}

const fastfoodSchema = new Schema({
    name: { type: String, required: true, unique: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
});

fastfoodSchema.plugin(uniqueValidator);

export const FastfoodModel = model<FastfoodDocument>('Fastfood', fastfoodSchema, 'fastfoods');