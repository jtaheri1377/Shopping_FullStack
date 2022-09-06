import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Category } from 'src/app/product/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
    BaseUrl = "http://localhost:55447/api/";
  
  
    getAll(TableName: string){
      let url = this.BaseUrl + TableName;
      return this.http.get(url);
    }

    add(TableName: string, ObjectBody: any) {
      let url = this.BaseUrl + TableName;
      return this.http.post(url, ObjectBody);
    }

    Edit(TableName: string, CategoryBody: any, Id: any) {
      let url = this.BaseUrl + TableName +"/"+ Id;
      return this.http.put(url, CategoryBody);
    }
    
    Delete(TableName: string, Id: any): Observable<Category> {
      let url = this.BaseUrl + TableName +"/"+ Id;
      return this.http.delete<Category>(url);
    }
  }
