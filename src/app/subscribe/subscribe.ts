import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  standalone:true,
  imports: [],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.css',
})
export class Subscribe {

  productId:any;
  productName: string = '';
  constructor(private route:ActivatedRoute){}
  ngOnInit(){

    this.route.paramMap.subscribe(params =>{
      this.productId = params.get('id');
       // simulate product data
      this.loadProduct(this.productId);
    })
  }

  loadProduct(id: any) {
    if (id == 101) {
      this.productName = 'Laptop';
    } else if (id == 102) {
      this.productName = 'Mobile';
    } else if (id == 103) {
      this.productName = 'Headphones';
    } else {
      this.productName = 'Unknown Product';
    }
  }
}
