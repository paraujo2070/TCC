export class Usuario {
    email: string;
    senha: string;
    username: string;
    nome: string;
    dadosdamensagem: string;
    remetente: string;
    destinatario: string;

    // tslint:disable-next-line: ban-types
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }

}
