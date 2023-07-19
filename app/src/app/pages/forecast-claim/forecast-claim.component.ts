import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/shared/resource.service';
import { Recurso, Calendar } from 'src/app/shared/models.model';

@Component({
  selector: 'app-forecast-claim',
  templateUrl: './forecast-claim.component.html',
  styleUrls: ['./forecast-claim.component.css']
})
export class ForecastClaimComponent implements OnInit {
  recursos: Recurso[];
  alocacoes: Recurso[];
  find: string;
  
  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.recursos = this.getIntervalo();
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

  diffDatesInDays(start: Date, end: Date): number {
    return this.resourceService.diffDatesInDays(start, end);
  }

  getIntervalo(): Recurso[] {
    return this.resourceService.getIntervalo();
  }

  acrescentarData(data: Date, dias: number): String {
    return this.resourceService.acrescentarData(data, dias);
  }
}
