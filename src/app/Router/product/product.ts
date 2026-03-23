import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  productId: any;
  constructor (private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.productId =params['id'];
    });
  }
}
