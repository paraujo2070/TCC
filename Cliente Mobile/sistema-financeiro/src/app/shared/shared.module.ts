import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  exports: [CommonModule, ReactiveFormsModule, IonicModule, FormsModule]
})
export class SharedModule { }
