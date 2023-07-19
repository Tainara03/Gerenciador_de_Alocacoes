import { Injectable } from '@angular/core';
import { Recurso, Calendar} from './models.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  
  
  constructor() { }

  listar(): Recurso[] {
    const recursos = localStorage['recursos'];
    return recursos ? JSON.parse(recursos) : [];
  }

  cadastrar(recurso: Recurso): void {
    const recursos = this.listar();
    recurso.id = new Date().getTime();
    recurso.intervaloDias = this.diffDatesInDays(new Date(recurso.inicioAlocacao), new Date(recurso.fimAlocacao));     
    recursos.push(recurso);
    localStorage['recursos'] = JSON.stringify(recursos);
  }

  buscarID(id: number): Recurso {
    const recursos: Recurso[] = this.listar();
    return recursos.find(recurso => recurso.id === id);
  }

  atualizar(recurso: Recurso): void {
    const recursos: Recurso[] = this.listar();
    recursos.forEach((obj, index, objs) => {
      if (recurso.id === obj.id) {
        objs[index] = recurso;
      }
    });
    recurso.intervaloDias = this.diffDatesInDays(new Date(recurso.inicioAlocacao), new Date(recurso.fimAlocacao));
    localStorage['recursos'] = JSON.stringify(recursos);
  }

  remover(id: number): void {
    let recursos: Recurso[] = this.listar();
    recursos = recursos.filter(recurso => recurso.id !== id);
    localStorage['recursos'] = JSON.stringify(recursos);
  }

  busca(find: string): Recurso[] {
    let recursos: Recurso[] = this.listar();
    return recursos.filter(item => item.notesID.toLowerCase().includes(find.toLowerCase()))
  }

  diffDatesInDays(start: Date, end: Date): number {
    const timeDiff = end.getTime() - start.getTime();    
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    
    return Math.abs(daysDiff)+1;
  }

  getIntervalo(): Recurso[] {
    const recursos = this.listar();
    const intervalo: Recurso[] = [];
    
    for(let recurso of recursos) {
      for(let i = 0; i < recurso.intervaloDias; i++) {
        intervalo.push(recurso);
      }
    }

    return intervalo;
  }

  acrescentarData(data: Date, dias: number): String {
    const novaData = new Date(data);
    novaData.setDate(novaData.getDate() + dias); 

    return novaData.toLocaleDateString();
  }

}
