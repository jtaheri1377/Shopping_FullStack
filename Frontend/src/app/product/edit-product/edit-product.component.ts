import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  currentProductId: any;
  categories:any;
  products: any;
  currentProduct =
  {
    id: 0,
    name: "",
    price: 0,
    description: "",
    categoryid:"",
    img: "",
    IsAvailble: true
  };
   constructor(private service: ProductService) { }
  
    ngOnInit(): void {
      
      this.service.getAll("products").subscribe((data: any) => {
        this.products = data;
        this.getCategories();
      });
    }


      // Dont Forget submit Form.value in template!

    addCategory(form: any) {
     let NewProduct = form
     this.service.add("products", NewProduct).subscribe((data:any)=>{
      location.reload();
     });
   }
 
   EditProduct(form: any) {
     debugger;
     this.currentProduct = form;
     this.service.Edit("products", this.currentProduct, this.currentProduct.id).subscribe(data => {
     location.reload();
     })
   }
 
   setCurrentProductToModal(form: any)
   {
    // debugger;
      this.currentProduct = form;
    //  this.currentProductId= form.id;
    //   this.currentProduct.id=0;
     
   }
 
   DeleteProduct(form: any)
   {
     this.service.Delete("products", this.currentProduct.id).subscribe(data=>{
       location.reload();
     })
   }

   getCategories() {
    this.service.getAll("category").subscribe((data: any) => {
      this.categories = data;
    });
  }

  AddProduct(form: any) {
    debugger;
    this.currentProduct = form;
    this.service.add("products", this.currentProduct).subscribe(data => {
    location.reload();
    })
  }
    
 }
 