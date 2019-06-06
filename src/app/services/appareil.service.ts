export class AppareilService {
  appareils = [  {id: 1, name: 'TV', status: 'éteint'},
                {id: 2, name: 'Machine à laver', status: 'allumé'},
                {id: 3, name: 'Machine à coudre', status: 'allumé'},
                {id: 4, name: 'Micro ondes', status: 'éteint'},
                {id: 5, name: 'Lave vessel', status: 'allumé'}
              ];
  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }
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
