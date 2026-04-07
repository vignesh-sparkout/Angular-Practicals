import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  productId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    // Get ID using snapshot (one time)
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Snapshot ID:', id);

    
    // // Get ID using subscription 
    // this.route.paramMap.subscribe(params => {
    //   this.productId = params.get('id');
    //   console.log('Live ID:', this.productId);
    // });

  }
}