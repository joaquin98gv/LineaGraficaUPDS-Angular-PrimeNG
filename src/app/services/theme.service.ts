import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MainService } from './main.service';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    constructor(@Inject(DOCUMENT) private document: Document, private mainS: MainService) {}

    switchTheme(theme: string) {
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

        if (themeLink) {
            themeLink.href = `${theme}.css`;
            this.mainS.modoOscuro.next(theme == 'dark-indigo' ? true : false);
        }
    }
}