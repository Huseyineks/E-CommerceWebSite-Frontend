import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';

import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MaleComponent,
    FemaleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class CategoryModule { }
