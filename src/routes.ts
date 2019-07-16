import { Router } from 'express';
import { FastfoodController } from './fastfoodController';

const router = Router();

router
    .post('/fastfoods', FastfoodController.postFastfood)
    .get('/fastfoods', FastfoodController.getFastfoods)
    .get('/fastfoods/:_id', FastfoodController.getFastfoodById)  
    .patch('/fastfoods/:_id', FastfoodController.patchFastfood)
    .delete('/fastfoods/:_id', FastfoodController.deleteFastfood);

export {router};