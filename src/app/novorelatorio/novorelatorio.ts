import { Time } from "@angular/common";

export interface novorelatorio{
    id: number;
    data: Date;
    Hora: Time;
    tipo: string;
    n_serie: number;
    modelo: string;
    marca: string;
    defeito_relatado: string;
    defeito_encontrado: string;
    manutencao: boolean;
    troca_de_peçaequipamento: boolean
}
