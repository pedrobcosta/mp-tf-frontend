import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'criar-conta', component: CriarContaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
