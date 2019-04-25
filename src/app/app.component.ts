import { Component, OnInit } from '@angular/core';
import { Promise, reject } from 'q';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;

  lastUpdate = Promise(
    (resolve) => {
      const date = new Date();
      setTimeout(
        () => {
        resolve(date);
      }, 2000);
    }
  )

  appareils: any[];

  constructor( private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }
  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
