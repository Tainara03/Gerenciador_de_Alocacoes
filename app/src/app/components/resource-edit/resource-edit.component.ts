import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResourceService } from 'src/app/shared/resource.service';
import { Recurso } from 'src/app/shared/models.model';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.css']
})
export class ResourceEditComponent implements OnInit {

  @ViewChild('formRecurso', { static: true }) formRecurso: NgForm;
  recurso: Recurso;

  constructor(
    private resourceService: ResourceService,
    private router: Router,
    private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.recurso = this.resourceService.buscarID(id);
  }

  atualizar(): void {
    if(this.formRecurso.form.valid){
      this.resourceService.atualizar(this.recurso);
      this.router.navigate(['/resource-control']);
    }
  }

}
