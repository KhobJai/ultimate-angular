import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JesticleComponent } from './jesticle/jesticle.component';
import { PassengersComponent } from './passengers/passengers.component';

@NgModule({
  declarations: [
    AppComponent,
    JesticleComponent,
    PassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
