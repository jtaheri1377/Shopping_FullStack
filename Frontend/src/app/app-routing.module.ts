import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/product/product/product.component';
import { EditCategoryComponent } from 'src/app/product/edit-category/edit-category.component';
import { EditProductComponent } from 'src/app/product/edit-product/edit-product.component';

const routes: Routes = [
  {path:'', component: ProductComponent},
  {path:'products', component: ProductComponent},
  {path:'edit-category', component: EditCategoryComponent},
   {path:'edit-products', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
