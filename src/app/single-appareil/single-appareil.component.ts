import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Status';

  constructor(  private appareilsService: AppareilService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    try {
      this.name = this.appareilsService.getAppareilById(+id).name;
      this.status = this.appareilsService.getAppareilById(+id).status;
    } catch (error) {
      this.router.navigate(['/not-found']);
    }
  }

}
