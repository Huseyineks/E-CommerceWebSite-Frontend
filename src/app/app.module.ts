import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { CategoryModule } from './category/category.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

import { CartComponent } from './cart/cart/cart.component';

import { MaleComponent } from './category/male/male.component';
import { SharedModule } from './shared/shared.module';
import { CompleteOrderComponent } from './cart/cart/complete-order/complete-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component';
import { PastOrderComponent } from './past-order/past-order.component';
import { OrderDetailComponent } from './past-order/order-detail/order-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CompleteOrderComponent,
    MyAccountComponent,
    PastOrderComponent,
    OrderDetailComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
   
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
