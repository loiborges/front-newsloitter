import {Cliente} from './cliente';

export class Envio {
  idEnvio: number;
  // cliente: Cliente;
  cliente: string;
  status: string;
  dataEnvio: Date;
  msgErro: string;
  categoria: string;
  email: string;
}
