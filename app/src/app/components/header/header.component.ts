import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  name: string = '';

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
   
  }
  

}
