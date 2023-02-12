import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListaComponent } from '../modulos/Client/client-lista.component';
import { ClientAgregarComponent } from '../modulos/Client/cliente-agregar.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientListaComponent},
  { path: 'add', component: ClientAgregarComponent },
  { path:'edit/:id', component: ClientAgregarComponent },
  { path:'**', redirectTo: 'clientes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
