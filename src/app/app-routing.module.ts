import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AppComponent } from './app.component';
import { MaleComponent } from './category/male/male.component';
import { FemaleComponent } from './category/female/female.component';

import { AddProductComponent } from './admin/add-product/add-product.component';



const routes: Routes = [
  {path : '',component : AppComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'male', component : MaleComponent},
  {path : 'female', component : FemaleComponent},
  {path : 'add-product', component : AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
