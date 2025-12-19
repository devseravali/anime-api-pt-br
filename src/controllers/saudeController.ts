import { Request, Response } from 'express';

export const verificarSaude = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: 'OK', message: 'API está saudável' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao verificar saúde da API' });
  }
};
