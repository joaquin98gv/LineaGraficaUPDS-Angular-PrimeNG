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
}
