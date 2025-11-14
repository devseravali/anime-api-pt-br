export interface Animes {
    id: number;
    titulo: string;
    ano: number;
    generoIds: number[];
    estudioId: number;
    temporadaId: number;
    statusId: number;
    episodios: number;
    avaliacao: number;
    popularidade?: number;
    imagem?: string;
    tagIds?: number[];
    plataformaIds?: number[];
}