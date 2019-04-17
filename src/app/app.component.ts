import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareils = [  {name: 'TV', status: 'éteint'},
                {name: 'Machine à laver', status: 'allumé'},
                {name: 'Machine à coudre', status: 'allumé'},
                {name: 'Micro ondes', status: 'éteint'},
                {name: 'Lave vessel', status: 'allumé'}
              ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }
  allumerTous() {
    console.log('Alluler tous');
  }
}
