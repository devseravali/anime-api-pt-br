import { Request, Response } from 'express';

export const obterEstatisticas = async (req: Request, res: Response) => {
    try {
        const estatisticas = {
            totalAnimes: 1500,
            totalGeneros: 30,
            totalPlataformas: 15,
            totalUsuarios: 5000,
        };
        res.status(200).json(estatisticas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter estatísticas' });
    }
};