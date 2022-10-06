import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  nome = "Aninha";
  datAtual = new Date();

  /* somar(): number {
    return 10 + 20;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  } */
  valorA: number = 0;
  valorB: number = 0;
  resultado = 0;

  somar(): void {
    this.resultado = this.valorA + this.valorB;
  }

  subtrair(): void {
    this.resultado = this.valorA - this.valorB;
  }

}
