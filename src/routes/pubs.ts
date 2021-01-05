// src/routes/pubs.ts
import { Router, Request, Response, NextFunction } from 'express';
import getModel from "../db/models";

const router = Router();

// renvoie un tableau avec tout les pubs
router.get('/',async (req: Request,res: Response,next: NextFunction): Promise<void> =>{
    const pubModel = getModel('pub');

    const pubs = await pubModel.find(); // aucuns paramètres de rechercher alors renvoie tout

    // Retourne les pubs au format json
    res.json(pubs);
});

export default router;