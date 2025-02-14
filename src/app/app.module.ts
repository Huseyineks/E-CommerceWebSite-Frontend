import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { CartReducer} from './cart/cart.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { CategoryModule } from './category/category.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AppState } from './app.state';
import { CartComponent } from './cart/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CategoryModule,
    AdminModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({order : CartReducer})
   
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
