import { Request, Response } from 'express';
import type { NextFunction } from 'express';

export const naoEncontrado = (
    req: Request,
    res: Response, 
    next: NextFunction
): void => {
    if(res.headersSent) {
        return next();
    } else {
        req.statusCode = 404;
        res.status(404).json({ error: 'Rota não encontrada' });
    }
};
