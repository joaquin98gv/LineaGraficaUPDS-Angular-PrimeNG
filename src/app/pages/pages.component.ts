import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AccountService } from '../services/account.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @HostBinding('class') className = '';
  toggle = false;
  userName = "Joaquin.Gonzalez";
  modoOscuro = false;
  darkClassName = 'dark-theme';

  persona!: any;
  appReady = false;
  menus: any[] = [
    {ubicacion: 'home', titulo: 'Inicio', icono: 'pi-home', external: false},
    {ubicacion: 'history', titulo: 'Historical Reg.', icono: 'pi-calendar', external: false},
    {ubicacion: 'pay', titulo: 'Payments', icono: 'pi-dollar', external: false},
    {ubicacion: 'register', titulo: 'Register', icono: 'pi-book', external: false},
    {ubicacion: 'https://portal.upds.edu.bo/ev-docente/#/loginms', titulo: 'Teacher Eval.', icono: 'pi-sliders-h', external: true},
  ];

  items: any[] = [
    {label: '', icon: 'pi pi-fw pi-home', path: 'home'},
    {label: '', icon: 'pi pi-calendar-plus', path: 'history'},
    {label: '', icon: 'pi pi-discord', path: 'screen2'},
    {label: '', icon: 'pi pi-fw pi-dollar', path: 'pay'},
    {label: '', icon: 'pi pi-fw pi-book', path: 'register'},
  ];

  itemSelected: any = {};
  
  constructor(private mainS: MainService, private accountS: AccountService, private router: Router) { 
    mainS.modoOscuro.subscribe((resp: any) => {
      this.modoOscuro = resp;
      localStorage.setItem('theme', this.modoOscuro ? 'dark' : 'light');
    });
    Promise.all([this.getPerfil()]).then((resp: any) => {
      this.persona = resp[0];
      mainS.persona = resp[0];
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      this.appReady = true;
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.modoOscuro = true;
    }
    this.mainS.toggle.subscribe((resp: any) => {
      this.toggle = resp;
    });
  }

  async getPerfil() {
    let response: any = await this.accountS.getDatosBasicos();
    
    return response;
  }

  async tienePermisos() {
    // let response = await this.mainS.getModulos();
  }
  async obtenerInterfaces() {
    // let response = await this.mainS.getInterfaces();
    // this.mainS.interfaces = response;
    // this.menus = response;
  }

  changeToggle(){
    this.toggle = !this.toggle;
  }

  redirectForTab(item: any){
    console.log(item, this.itemSelected);
    
    this.router.navigateByUrl(item.path);
  }

}