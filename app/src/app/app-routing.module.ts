import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourceControlComponent } from './pages/resource-control/resource-control.component';
import { ForecastRevenueComponent } from './pages/forecast-revenue/forecast-revenue.component';
import { ForecastClaimComponent } from './pages/forecast-claim/forecast-claim.component';
import { ResourceRegisterComponent } from './components/resource-register/resource-register.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceEditComponent } from './components/resource-edit/resource-edit.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
  },

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'resource-control',
    component: ResourceControlComponent
  },

  {
    path: 'forecast-revenue',
    component: ForecastRevenueComponent
  },

  {
    path: 'forecast-claim',
    component: ForecastClaimComponent
  },

  {
    path: 'resource-list',
    component: ResourceListComponent
  },

  {
    path: 'resource-control/register',
    component: ResourceRegisterComponent
  },

  {
    path: 'resource-control/edit/:id',
    component: ResourceEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
