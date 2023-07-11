import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/shared/resource.service';
import { Recurso } from 'src/app/shared/resource-table.model';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  recursos: Recurso[];
  find: string;
  
  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.recursos = this.listar();
  }

  listar(): Recurso[] {
    return this.resourceService.listar();
  }

  remover(recurso: Recurso): void{ //event evita o refresh da página
    // $event. preventDefault();
    if(confirm('Deseja remover o recurso "' + recurso.cnum + " - " + recurso.notesID + '"?')){
      this.resourceService.remover(recurso.id);
      this.recursos = this.listar();
    }
  }

  busca(find: string): void {
    this.recursos = this.resourceService.busca(find);    
  }

}
