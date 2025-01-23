import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';



@NgModule({
  declarations: [
    MaleComponent,
    FemaleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
