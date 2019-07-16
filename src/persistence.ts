import {FastfoodModel} from './schemes';
import {Fastfood} from './dto/fastfood.interface';
import { Types } from 'mongoose';

export class FastfoodRepository {
    static async create(fastfood: Fastfood): Promise<Fastfood> {
        let newFastfood = await FastfoodModel.create(fastfood);
        return newFastfood.save();
    }

    static async getFastfoods(): Promise<Fastfood[]> {
        return await FastfoodModel.find().exec();
    }

    static async getFastfoodById(id: string): Promise<any> {
        if(Types.ObjectId.isValid(id)) {
            return await FastfoodModel.findById(id).exec();
        } else {
            throw new Error('ObjectId Invalid!');
        }
    }

    static async updateFastfood(id: string, field: Object): Promise<any> {
        if (Types.ObjectId.isValid(id)) {
            return await FastfoodModel.findByIdAndUpdate(id, {$set: field}, {new:true})
        } else {
           throw new Error('ObjectId Invalid!');
        }
    }  

    static async deleteFastfood(id: string): Promise<any> {
        if(Types.ObjectId.isValid(id)) {
            await FastfoodModel.findByIdAndDelete(id);
            return await FastfoodModel.find().exec();
        } else {
            throw new Error('ObjectId Invalid!');
        }
    }
}  