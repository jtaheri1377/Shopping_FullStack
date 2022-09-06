import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  
 categories: any;
 currentCategory =
 {
   id: 0,
   name: ""
 };
  constructor(private service: ProductService) { }
 
   ngOnInit(): void {
     
     this.service.getAll("category").subscribe((data: any) => {
       this.categories = data;
     });
   }

   addCategory(form: any) {
    let NewCategory =
      {
        name: form.name.value
      };
    this.service.add("category", NewCategory).subscribe((data:any)=>{
     location.reload();
    });
  }

  EditCategory(form: any) {
    debugger;
    this.currentCategory = form;
    this.service.Edit("category", this.currentCategory, this.currentCategory.id).subscribe(data => {
    location.reload();
    })
  }

  setCurrentCategoryToModal(form: any)
  {
     this.currentCategory = form;
  }

  Deletecategory(form: any)
  {
    this.service.Delete("category", this.currentCategory.id).subscribe(data=>{
      location.reload();
    })
  }
   
}
