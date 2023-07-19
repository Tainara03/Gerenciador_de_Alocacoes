export class Recurso {   

    constructor(
        public id?: number,
        public cnum?: string,
        public notesID?: string,
        public nomeCliente?: string,
        public vaga?: string,
        public work?: string,
        public growth?: string,
        public sl?: string,
        public banda?: string,
        public perfil?: string,
        public pre?: string,
        public comunidade?: string,
        public squad?: string,
        public dpe?: string,
        public ltf?: string,
        public inicioAlocacao?: Date,
        public fimAlocacao?: Date,
        public tipoFunc?: string,
        public localidade?: string,
        public capacidadeSemanal?: string,
        public alocacao?: string,
        public statusAlocacao?: boolean,
        public recursoAtivo?: boolean,
        public intervaloDias?: number
    ) {}

}

export class Calendar {

    constructor(
        public startDate?: Date,
        public endDate?: Date,
        public week?: number,
        public comments?: string
    ) {}
}