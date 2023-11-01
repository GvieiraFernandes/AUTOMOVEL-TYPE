import { Request, Response } from 'express';
import Automovel from '../models/lista';


export default class AutomovelController {

    static async inserirLista(req: Request, res: Response) {

        try {
            const db = (req as RequestDB).db;
            const listaAutomovel = new listaAutomovel(db);
            let automovel: Automovel;

            try {
                const record = req.body;
                automovel = listaAutomovel.validar(record);
            } catch (error) {
                res.status(400).json({ message: (error as Error).message })
                return;
            }

            await listaAutomovel.inserir(automovel);

            res.status(201).json(automovel);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }
}
