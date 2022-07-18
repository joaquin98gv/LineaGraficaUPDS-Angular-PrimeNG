import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  loading = [
    false,
    false,
    false,
    false
  ]
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => {
      this.loading[index] = false;
    }, 3000);
  }

}
