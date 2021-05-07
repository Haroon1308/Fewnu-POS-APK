import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutProductPage } from './ajout-product.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutProductPageRoutingModule {}
