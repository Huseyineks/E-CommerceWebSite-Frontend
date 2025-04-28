import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [
    
    AddProductComponent,
    AdminComponent,
    DashboardComponent,
    ProductsComponent,
    OrdersComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports : [AdminComponent]
})
export class AdminModule { }
