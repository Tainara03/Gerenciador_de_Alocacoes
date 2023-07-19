import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    
  }

}
