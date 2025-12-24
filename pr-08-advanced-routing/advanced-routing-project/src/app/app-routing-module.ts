import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  {
    path: 'products',
    component: ProductList,
    canActivate: [AuthGuard]
  },

  {
    path: 'products/:id',
    component: ProductDetail
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
