import { Injectable } from '@angular/core';
import { Product } from './Product';
// import { Products} from './Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  arrProducts=[
    new Product(101,"TV",10000),
    new Product(102,"Laptop",10000),
    new Product(103,"Watch",10000),
    new Product(104,"Mobile",10000)
  ]

  getAllProducts()
  {
    return this.arrProducts;
  }
  
}
