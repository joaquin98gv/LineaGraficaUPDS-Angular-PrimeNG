import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  toggle: BehaviorSubject<boolean> = new BehaviorSubject(false);
  xporcentaje: BehaviorSubject<number> = new BehaviorSubject(0);

  // modo oscuro
  modoOscuro: Subject<boolean> = new Subject<boolean>();
  darkClassName = 'dark-theme';
  //Permisos
  public interfaces = [];
  public persona: any = {};

  inscripcionSeleccionada: BehaviorSubject<any> = new BehaviorSubject(0);

  cad: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient, private router: Router) {
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

  public getCabecera() {
    const headers = new HttpHeaders()
      .append('Authorization',
        'Bearer ' + (localStorage.getItem('Authorization') == null ? '' : localStorage.getItem('Authorization')))
      .append('api-key', '5SJE8rmwaw4rKz')
      .append('Content-Type', 'application/json');
    return headers;
  }

  //! ---------------Funciones que hacen peticiones--------------- //
  // [GET]
  public async request(url: string) {
    const headers = this.getCabecera();
    let ans = await new Promise((resolve, reject) => {
      this.http.get(url, { headers, observe: 'response' }).subscribe({
        next: (response) => {
          console.log(response);
          resolve(response.body);
        },
        error: (err) => {
          if(err.status == 401 || err.status == 403)
            this.logOut();
          reject(err);
        }
      })
    });
    return ans;
  }

  // [POST]
  public async requestPost(url: string, obj: any = null) {
    const headers = this.getCabecera();
    let ans = await new Promise((resolve, reject) => {
      this.http.post(url, obj, { headers, observe: 'response' }).subscribe({
        next: (response) => {
          console.log(response);
          resolve(response.body);
        },
        error: (err) => {
          if(err.status == 401 || err.status == 403)
            this.logOut();
          reject(err);
        }
      })
    });
    return ans;
  }

  subirFoto(archivo: File) {
    this.xporcentaje.next(0);
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append('files', archivo, archivo.name);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la solictud');
            reject(JSON.parse(xhr.response));
          }
        }
      };
      let url = environment.urlFile;
      xhr.open('POST', url, true);
      xhr.upload.onprogress = (e) => {
        var percentComplete = Math.ceil((e.loaded / e.total) * 100);
        this.xporcentaje.next(percentComplete);
      };
      // xhr.setRequestHeader('Authorization', 'Bearer ' + (localStorage.getItem('Authorization') == null ? '' : localStorage.getItem('Authorization')));
      xhr.send(formData);
    });
  }

  logOut(){
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }
}