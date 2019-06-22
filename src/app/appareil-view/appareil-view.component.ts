import { Component, OnInit } from '@angular/core';
import { Promise, reject } from 'q';
import { AppareilService } from './../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs-compat/operators/map';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
  appareilSubscription: Subscription;

  constructor( private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appreilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    // .pipe(
    //   map(
    //     (appareils: any[]) => appareils.filter(
    //       (appareil: any) => appareil.status !== 'allumé'
    //     )
    //   )
    // )
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }

}
