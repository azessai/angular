import { Subject } from 'rxjs';

export class AppareilService {
  appreilSubject = new Subject<any[]>();


  private appareils = [  {id: 1, name: 'TV', status: 'éteint'},
                {id: 2, name: 'Machine à laver', status: 'allumé'},
                {id: 3, name: 'Machine à coudre', status: 'allumé'},
                {id: 4, name: 'Micro ondes', status: 'éteint'},
                {id: 5, name: 'Lave vessel', status: 'allumé'}
              ];
  emitAppareilSubject(){
    this.appreilSubject.next(this.appareils.slice());
  }
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
    this.emitAppareilSubject();
  }
  switchOffAll(){
    this.appareils.forEach(appareil => {
      appareil.status = 'éteint';
    });
    this.emitAppareilSubject();
  }
  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }
  addAppareil(name:string, status: string){
    const appareilObject = {
      id: 0,
      name: '',
      status: '',
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();

  }
}
