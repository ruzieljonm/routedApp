import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from'@angular/forms';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { DisplayComponent } from './display/display.component';
import {SharedService } from './shared.service';
const appRoutes: Routes = [
  {path: 'datainput', component: EntryComponent},
  {path: 'dataoutput', component: DisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DisplayComponent
  ],
  imports: [
   
BrowserModule,
RouterModule.forRoot(appRoutes),
FormsModule
  ],
  providers: [SharedService],
bootstrap:[AppComponent]
})
export class AppModule { }
