import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/shared/resource.service';
import { Recurso } from 'src/app/shared/models.model';

@Component({
  selector: 'app-resource-control',
  templateUrl: './resource-control.component.html',
  styleUrls: ['./resource-control.component.css']
})
export class ResourceControlComponent implements OnInit {

  recursos: Recurso[];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.recursos = this.listar();

  }

  listar(): Recurso[] {
    return this.resourceService.listar();
  }

  
}
