import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './productservice.service';
import { ProductList, ProductAdd, OrderProduct } from './product-interface';
import { Alerttype1Component } from '../alerttype1/alerttype1.component';
import {COMMONTEXTS} from '../static/commonMessages';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('closebutton', { static: false }) closebutton;
  @ViewChild('orderModalClose', { static: false }) orderModalClose;
  @ViewChild(Alerttype1Component) alerttype1Component:Alerttype1Component;
  productListData: Array<ProductList> = [];
  productFormData: ProductAdd = <ProductAdd>{}
  orderData: OrderProduct = <OrderProduct>{}

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getproductLists();
  }


  getproductLists():void{
    this.productService.getProductLists().subscribe((data:Array<ProductList>)=>{
      this.productListData = data
    }, (e) =>{
      this.alerttype1Component.toggleAlerts(COMMONTEXTS.errorMsg, true, 'e')
    })
  }

  addProduct(){
    this.closebutton.nativeElement.click();
    this.productService.addProduct(this.productFormData).subscribe((res)=>{
        this.alerttype1Component.toggleAlerts(COMMONTEXTS.productAdded, true)
        setTimeout(()=>{
          this.getproductLists()
        },500)
    }, (er)=>{
      this.alerttype1Component.toggleAlerts(COMMONTEXTS.errorMsg, true, 'e')
    })

  }

  setdatafunc(data){
    this.orderData = {
      productId: data['productId'],
      quantity: 0,
      existingData : data
    }
    
  }

  orderProduct(){
    this.orderModalClose.nativeElement.click();
    this.alerttype1Component.toggleAlerts(COMMONTEXTS.processig, false, 'i')
    let tempData = {
      "productId": this.orderData.productId,
      "quantity": this.orderData.quantity
    }
    
    this.productService.orderProduct(tempData).subscribe((res)=>{
        this.alerttype1Component.toggleAlerts(COMMONTEXTS.orderSuccess, true)
        setTimeout(()=>{
          this.getproductLists()
        },500)
    }, (er)=>{
      this.alerttype1Component.toggleAlerts(COMMONTEXTS.errorMsg, true, 'e')
    })
  }
  
}
