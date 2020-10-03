import { TestBed } from '@angular/core/testing';

import { ProductService } from './productservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductService] 
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

});
