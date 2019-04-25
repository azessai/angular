export class AppareilService {
  appareils = [  {name: 'TV', status: 'éteint'},
                {name: 'Machine à laver', status: 'allumé'},
                {name: 'Machine à coudre', status: 'allumé'},
                {name: 'Micro ondes', status: 'éteint'},
                {name: 'Lave vessel', status: 'allumé'}
              ];
  switchOnAll(){
    this.appareils.forEach(appareil => {
      appareil.status = 'allumé';
    });
  }
  switchOffAll(){
    this.appareils.forEach(appareil => {
      appareil.status = 'éteint';
    });
  }
  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }
}
