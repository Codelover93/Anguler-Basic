import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any[] = [
    {
      "id": 1,
      "name": "Awesome product 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "120.00",
      "quantity": 56840,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg"
    }, {
      "id": 2,
      "name": "Awesome product 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "99.00",
      "quantity": 9358,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485077/shoes-3_rk25rt.jpg"
    }, {
      "id": 3,
      "name": "Awesome product 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "140.00",
      "quantity": 90316,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-2_g4qame.jpg"
    }, {
      "id": 4,
      "name": "Awesome product 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      "price": "220.00",
      "quantity": 5899,
      "imgae": "https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-4_vgfjy9.jpg"
    }
];
  selected_id;qty;
  constructor(private router:Router, private sd:SenddataService) {
    sd.msg.subscribe(
      (res:any)=>{
        //console.log(res);
        this.selected_id=res.productid;
        this.qty=res.qty;
      },
      (err:any)=>{
        console.log(err);
      }
    );
    if(this.selected_id==null){
      router.navigate(['']);
    }
   }

  ngOnInit(): void {
  }

}
