// src/routes/barathon.ts

import { Router, Request, Response, NextFunction } from 'express';
import getModel from '../db/models';

const router = Router();

// renvoie un tableau avec tout les barathons
router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> =>{

    const barathonModel = getModel('barathon');
    const barathons = await barathonModel.find(); // aucuns paramètres de rechercher => alors renvoie tout

    // retourne les barathons au formats json
    res.json(barathons);
});

export default router;