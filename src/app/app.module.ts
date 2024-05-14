import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Section2Component } from './section2/section2.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Section2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,ReactiveFormsModule ,
    BrowserModule,
    BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
