import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AppComponent } from './app.component';
import { MaleComponent } from './category/male/male.component';
import { FemaleComponent } from './category/female/female.component';

import { AddProductComponent } from './admin/add-product/add-product.component';
import { authGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path : '',redirectTo : 'home',pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'male', component : MaleComponent,canActivate : [authGuard]},
  {path : 'female', component : FemaleComponent},
  {path : 'add-product', component : AddProductComponent},
  {path : 'home',component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
