import { Time } from "@angular/common";

export interface novorelatorio{
    n: number;
    data: Date;
    Hora: Time;
    tipo: string;
    n_serie: number;
    modelo: string;
    marca: string;
    defeito_relatado: string;
    defeito_encontrado: string;
    manutenção: boolean;
    troca_de_peçaequipamento: boolean
}