import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: any;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAll("category").subscribe((data: any) => {
      this.categories= data;
  });
  }
}
