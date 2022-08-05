import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token = '';
  user = {
    username: '',
    password: ''
  }
  remember = false;

  constructor(  public router: Router  ) {
    localStorage.removeItem('Authorization');
    
    this.token = this.router.parseUrl(this.router.url).queryParams['token'];

    if (this.token != '' && this.token != null) {
      localStorage.setItem('Authorization', this.token);
      router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('credenciales') != null && localStorage.getItem('credenciales') != ''){
      let user: any = JSON.parse(localStorage.getItem('credenciales')??'');
      this.user.username = user.username;
      this.user.password = user.password??'';
      this.remember = true;
    }
  }

  login(){
    if(this.remember){
      localStorage.setItem('credenciales', JSON.stringify(this.user));
    }else{
      localStorage.removeItem('credenciales');
    }

    // validar credenciales
    // localStorage.setItem('Authorization', this.token);
    this.router.navigateByUrl('/');
  }

}
