import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header';
import { HomeComponent } from './pages/home/home.component';
import { ResourceControlComponent } from './pages/resource-control/resource-control.component';
import { ForecastRevenueComponent } from './pages/forecast-revenue/forecast-revenue.component';
import { ForecastClaimComponent } from './pages/forecast-claim/forecast-claim.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceRegisterComponent } from './components/resource-register/resource-register.component';
import { ResourceService } from './shared/resource.service';
import { ResourceEditComponent } from './components/resource-edit/resource-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResourceControlComponent,
    ForecastRevenueComponent,
    ForecastClaimComponent,
    ResourceListComponent,
    ResourceRegisterComponent,
    ResourceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
