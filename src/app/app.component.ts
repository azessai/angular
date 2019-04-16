import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth: boolean = false;

  appareilOne: string = 'TV';
  appareilTwo: string = 'Machine à laver';
  appareilthree: string = 'Four';

  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }
  allumerTous(){
    console.log('Alluler tous');
  }
}
