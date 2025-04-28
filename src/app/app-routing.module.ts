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
import { CartComponent } from './cart/cart/cart.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrdersComponent } from './admin/orders/orders.component';



const routes: Routes = [
  {path : '',redirectTo : 'home',pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'male', component : MaleComponent},
  {path : 'female', component : FemaleComponent},
  {path : 'admin/add-product', component : AddProductComponent,canActivate : [authGuard]},
  {path : 'admin/dashboard', component : DashboardComponent,canActivate : [authGuard]},
  {path : 'admin/customers', component : CustomersComponent,canActivate : [authGuard]},
  {path : 'admin/products', component : ProductsComponent,canActivate : [authGuard]},
  {path : 'admin/orders', component : OrdersComponent,canActivate : [authGuard]},
  {path : 'home',component : HomeComponent},
  {path : 'cart',component : CartComponent,canActivate : [authGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
