export interface Personagem {
  id: number;
  nome: string;
  apelido?: string;
  animeId: number;
  papel: 'protagonista' | 'coadjuvante' | 'antagonista';
  idade?: number;
  genero?: string; 
  curiosidades?: string[];
  imagem?: string; 
}
