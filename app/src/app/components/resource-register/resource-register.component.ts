import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/shared/resource.service';
import { Recurso } from 'src/app/shared/models.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resource-register',
  templateUrl: './resource-register.component.html',
  styleUrls: ['./resource-register.component.css']
})
export class ResourceRegisterComponent implements OnInit {

  @ViewChild('formRecurso', { static: true }) formRecurso: NgForm;
  recurso: Recurso;


  constructor(private resourceService: ResourceService, private router: Router) {}

  ngOnInit(): void {
    this.recurso = new Recurso();
  }

  cadastrar(): void{
    if (this.formRecurso.form.valid){
      this.resourceService.cadastrar(this.recurso);
      this.router.navigate(["/resource-control"]);
    }
  }

}
