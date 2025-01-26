import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Component } from './Task1/section1/section1.component';
import { FormsModule } from '@angular/forms';
import { Section2Component } from './Task1/section2/section2.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
