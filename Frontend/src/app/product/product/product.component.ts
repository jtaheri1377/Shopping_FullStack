import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAll("Products").subscribe((data:any) => { this.products = data});    
  }

}
