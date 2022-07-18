import { Component, HostBinding, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @HostBinding('class') className = '';
  toggle = true;
  userName = "Joaquin.Gonzalez";
  modoOscuro = false;
  darkClassName = 'dark-theme';
  quiereBuscar = false;
  search = '';
  bread = '';
  appReady = false;
  menus: any[] = [];
  constructor(private mainS: MainService) {
      mainS.modoOscuro.subscribe((resp: any) => {
        this.modoOscuro = resp;
        localStorage.setItem('theme', this.modoOscuro ? 'dark' : 'light');
      });
      this.obtenerInterfaces().then((response: any) => {
        this.appReady = true;
      });
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.modoOscuro = true;
    }
  }

  async tienePermisos() {
    // let response = await this.mainS.getModulos();
  }
  async obtenerInterfaces() {
    // let response = await this.mainS.getInterfaces();
    // this.mainS.interfaces = response;
    // this.menus = response;
  }

}