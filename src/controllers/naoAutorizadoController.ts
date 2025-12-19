import { Request, Response } from 'express';
import type { NextFunction } from 'express';

export const naoAutorizada = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (res.headersSent) {
        return next();
    } else {
        req.statusCode = 401;
        res.status(401).json({ error: 'Não autorizado' });
    }
};