import { Injectable } from '@angular/core';
import { Recurso } from './resource-table.model';

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

}
