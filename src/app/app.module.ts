import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';
import { UtilService } from "./util.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule , ReactiveFormsModule}from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule }    from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import 'hammerjs';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { Routes, RouterModule} from '@angular/router';


const routes : Routes = [
  { path : '', component : ListComponent},
  { path : 'coffee', component : CoffeeComponent},
  { path : 'coffee/:id', component : CoffeeComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    MatSliderModule,MatSlideToggleModule,
    BrowserAnimationsModule,MatToolbarModule,MatCardModule,MatButtonModule,MatIconModule,
    RouterModule.forRoot(routes),ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [GeolocationService,DataService,UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
