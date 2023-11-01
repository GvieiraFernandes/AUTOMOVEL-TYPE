export default class Automovel{
        fabricante: string;
        modelo: string;
        categoria: string;
        ano: number;
        potencia: number;

    
        constructor(fabricante: string, modelo: string, categoria: string, ano: number, potencia: number) {
            this.fabricante = fabricante;
            this.modelo = modelo;
            this.categoria = categoria;
            this.ano = ano;
            this.potencia = potencia
        }
    }