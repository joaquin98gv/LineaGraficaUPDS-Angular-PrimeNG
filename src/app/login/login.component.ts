import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginDTO } from '../models/login-dto';
import { VerificarCredencialesDTO } from '../models/verificar-credenciales-dto';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  cargandoData = false;
  token = '';
  user = {
      userName: "",
      password: "",
      appId: 0
    }
  remember = false;

  objLogin = {
    id: 0,
    sedeId: 1,
    appId: 1,
    tipo: ''
  }

  sedes: any = {
    options: ['Funcionario', 'Estudiante'],
    sedesFuncionario: [],
    sedesEstudiante: [],
    roll: '',
    dataCargada: false
  };

  constructor(  public router: Router, private accountService: AccountService, private messageService: MessageService ) {
    this.token = this.router.parseUrl(this.router.url).queryParams['token'];

    if (this.token != '' && this.token != null) {
      localStorage.setItem('Authorization', this.token);
      router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('credenciales') != null && localStorage.getItem('credenciales') != ''){
      let user: any = JSON.parse(localStorage.getItem('credenciales')??'');
      this.user.userName = user.userName;
      this.user.password = user.password??'';
      this.remember = true;
    }
  }

  verificarCredencial(){
    if(this.remember){
      localStorage.setItem('credenciales', JSON.stringify(this.user));
    }else{
      localStorage.removeItem('credenciales');
    }

    this.cargandoData = true;
    this.accountService.verificarCredencial(this.user).then((res: VerificarCredencialesDTO) => {
      this.sedes.sedesFuncionario = res.sedesFuncionario;
      this.sedes.sedesEstudiante = res.sedesEstudiante;
      this.sedes.dataCargada = true;
      this.sedes.roll = this.roll();
      
      localStorage.setItem('Authorization', res.userToken.token);
      
      if(this.sedes.sedesEstudiante.length == 1){
        let objEvent = {value: this.sedes.sedesEstudiante[0]}
        this.selectSede(objEvent);
      }

    }).catch((err: any) => {
      this.messageService.add({severity:'error', summary: 'Alert!', detail: err.error});
    }).finally(() => {
      this.cargandoData = false;
    });
  }

  roll(){
    if(this.sedes.sedesFuncionario.length > 0 && this.sedes.sedesEstudiante.length == 0){
      return "Funcionario";
    }
    if(this.sedes.sedesFuncionario.length == 0 && this.sedes.sedesEstudiante.length > 0){
      return "Estudiante";
    }
    return "";
  }

  selectSede(sede: any){
    this.cargandoData = true;
    this.objLogin.sedeId = sede.value.id;
    this.objLogin.tipo = this.sedes.roll;
    this.accountService.logIn(this.objLogin).then((res: LoginDTO) => {
      localStorage.setItem('Authorization', res.token);
      this.router.navigateByUrl('/');
    }).catch((err: any) => {
      console.log(err);
    }).finally(() => {
      this.cargandoData = false;
    });
  }

}
