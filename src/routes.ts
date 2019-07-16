import { Router } from 'express';
import { FastfoodController } from './fastfoodController';

const router = Router();

router
    .post('/fastfoods', FastfoodController.postFastfood)
    .get('/fastfoods', FastfoodController.getFastfoods)
    .get('/fastfoods/:id', FastfoodController.getFastfoodById)  
    .patch('/fastfoods/:id', FastfoodController.patchFastfood)
    .delete('/fastfoods/:id', FastfoodController.deleteFastfood);

export {router};