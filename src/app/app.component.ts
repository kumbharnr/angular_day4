import { Component } from '@angular/core';
import { StudentComponent } from './student/student/student.component';
import { ProductService } from './product.service';
import { Product } from './Product';
import { LoggerService } from './logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 
export class AppComponent {
  title = 'day4';
  arrProducts:Product[]=[];

  constructor (private productServiceObj:ProductService,private LoggerServiceObj:LoggerService){}


  getProductlist()
  {
      this.LoggerServiceObj.log("befor fatching the records from products services....");
      this.arrProducts =this.productServiceObj.getAllProducts();
      this.LoggerServiceObj.log("after fatching the record from the product services");

  }
  strdatafromchiled="";

  getMessage(message:any){
    this.strdatafromchiled=message;
  }


  
  getDataFromAnotherComponent(){
    let studentComponentObj=new StudentComponent();
    console.log("data sent from student component from student module is :"+studentComponentObj.getName());
  }

  
}
