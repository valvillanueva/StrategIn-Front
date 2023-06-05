import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from './material.module';
import { HttpClientModule } from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    LogInFormComponent
  ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserModule, BrowserAnimationsModule,
        HttpClientModule, MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
