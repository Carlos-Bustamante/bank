import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientListaComponent } from 'src/modulos/Client/client-lista.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAgregarComponent } from '../modulos/Client/cliente-agregar.component';

import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientListaComponent,
    ClientAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
