import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';

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

  funcionario: any = {};

  modeOptions = [
    { value: 'light-indigo', icon: 'pi pi-sun', justify: 'Center' },
    { value: 'dark-indigo', icon: 'pi pi-moon', justify: 'Center' },
  ];

  constructor(private router: Router, private mainS: MainService, private themeService: ThemeService) {
    // this.getPerfil().then((resp: any) => {
    //   if(resp == "error") this.logOut();
    // });
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.theme = 'dark-indigo';
    }
    this.cambiarModo();
  }
  
  toggleOff(){
    this.aplicarCambios.emit();
  }

  logOut(){
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }

  cambiarModo(){
    this.themeService.switchTheme(this.theme);
  }

  async getPerfil() {
    let response: any = await this.mainS.getPerfil();
    
    this.funcionario = response;
    return response;
  }

}