import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';

/**
 * menu lateral
 */

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() menus: any[] = [];
  @Output() aplicarCambios: EventEmitter<void> = new EventEmitter<void>()
  @Output() cambiarModoEvent: EventEmitter<void> = new EventEmitter<void>()
  theme = 'light-indigo';

  /* *Persona que esta logeada */
  persona: any = {};

  /* *Opciones de thema */
  modeOptions = [
    { value: 'light-indigo', icon: 'pi pi-sun', justify: 'Center' },
    { value: 'dark-indigo', icon: 'pi pi-moon', justify: 'Center' },
  ];

  constructor(private router: Router, private mainS: MainService, private themeService: ThemeService) {
    this.persona = mainS.persona;
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.theme = 'dark-indigo';
    }
    this.cambiarModo();
  }

  /**
   * Cerrar sesion
   */
  logOut(): void {
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }

  /**
   * Cambiar modo de la aplicacion (dark o light)
   */
  cambiarModo(){
    this.themeService.switchTheme(this.theme);
  }

}