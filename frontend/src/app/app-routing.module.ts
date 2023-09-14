import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

const routes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'client-details/:id', component: ClientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
