import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutProductPageRoutingModule } from './ajout-product-routing.module';

import { AjoutProductPage } from './ajout-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutProductPageRoutingModule
  ],
  declarations: [AjoutProductPage]
})
export class AjoutProductPageModule {}
