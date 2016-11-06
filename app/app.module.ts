import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }   from './app.component';
import {SmartGardenPageComponent, DeviceComponent} from './pages/smart-garden-page.component';
import { SeedKitPageComponent } from './pages/seed-kit-page.component'

@NgModule({
  declarations: [
    AppComponent,
    SmartGardenPageComponent,DeviceComponent,
    SeedKitPageComponent
  ],
  imports: [
    BrowserModule,
    Ng2BootstrapModule],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
