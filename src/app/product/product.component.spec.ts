import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductService } from './productservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductList } from './product-interface';
import { of } from 'rxjs';
import { Alerttype1Component } from '../alerttype1/alerttype1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser'


class MockProductService {

  getProductLists(){
    return of([{
      "productName": "Chip",
      "productId": "85610816-587b-4ff5-ad9a-0091b0ca63f3",
      "availableQuantity": 0
    }]) ;
  }

  addProduct(){
    return of (true)
  }

 
}

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule, BrowserAnimationsModule],
      declarations: [ ProductComponent, Alerttype1Component ],
      providers: [ProductService, 
        { provide: ProductService, useClass: MockProductService },
        Alerttype1Component
      ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get product list: getproductLists ', () => {
    component.getproductLists();
    expect(component.productListData).length > 0
  });

  it('Add a product: addProduct ', () => {
    spyOn(component, 'addProduct')
    component.productFormData = {
      productName: 'test',
      availableQuantity: 25
    }
    fixture.debugElement.query(By.css('.btn-addproduct')).triggerEventHandler('click', null);
    expect(component.addProduct).toHaveBeenCalled()
  });

  it('Should test ngOnInit ', () => {
    spyOn(component, 'getproductLists')
    component.ngOnInit()
    expect(component.getproductLists).toHaveBeenCalled()
  });

});
