import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  codeRemember! : number;
  constructor(private mainS:  MainService) { }

  async sendCodeRememberPassForMail(userName: string, random: number) {
    let ans: any = await this.mainS.requestPost(`${environment.endPoint}Funcionarios`);
    return ans;
  }

  async verificarCredencial(credenciales: any){
    let ans: any = await this.mainS.requestPost(`${environment.endPointAccess}Accesos/VerificarCredencial`, credenciales);
    return ans;
  }

  async logIn(objLogin: any){
    let ans: any = await this.mainS.requestPost(`${environment.endPointAccess}Accesos/Login`, objLogin);
    return ans;
  }

  async getDatosBasicos(){
    let ans: any = await this.mainS.request(`${environment.endPoint}Personas/DatosBasico`);
    return ans;
  }
}
