import {Request, Response, NextFunction} from 'express';
import {FastfoodRepository} from './persistence';

export class FastfoodController {
    static async postFastfood(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body) {
                res.sendStatus(400);
            } else {
                let fastfood = await FastfoodRepository.create(req.body);
                console.log(`Cadastrado Fastfood: \n ${fastfood}`); 
                res.json(fastfood);
            }
        } catch (error) {
            next(error);
        }
    }

    static async getFastfoods(req: Request, res: Response, next: NextFunction) {
        try {
            let fastfoods = await FastfoodRepository.getFastfoods();
            res.json(fastfoods);
        } catch (error) {
            next(error);
        }
    }

    static async getFastfoodById(req: Request, res: Response, next: NextFunction) {
        try {
            let fastfood = await FastfoodRepository.getFastfoodById(req.params.id);
            res.json(fastfood);
        } catch (error) {
            next(error);
        }
    }

    static async patchFastfood(req: Request, res: Response, next: NextFunction) {
        await FastfoodRepository.updateFastfood(req.params.id, req.body)
        .then((doc) => {
            console.log(`Atualizado Fastfood: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }

    static async deleteFastfood(req: Request, res: Response, next: NextFunction) {
        await FastfoodRepository.deleteFastfood(req.params.id)
        .then((doc) => {
            console.log(`Removido Fastfood: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }
}
