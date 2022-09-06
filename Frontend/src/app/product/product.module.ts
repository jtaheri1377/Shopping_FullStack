import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditCategoryComponent,
    EditProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:
  [

    FormsModule
  ]
})
export class ProductModule { }
