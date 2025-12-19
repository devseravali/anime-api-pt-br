import type { NextFunction } from 'express';
import { Request, Response } from 'express';

export const trataErro = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) {
        return next(err);
    } else {
        req.statusCode = 500;
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};