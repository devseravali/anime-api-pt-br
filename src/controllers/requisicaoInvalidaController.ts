import { Request, Response } from 'express';
import type { NextFunction } from 'express';

export const requisicaoInvalida = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
   if (res.headersSent) {
        return next();
    } else {
        req.statusCode = 400;
        res.status(400).json({ error: 'Requisição inválida' });
    }
}; 