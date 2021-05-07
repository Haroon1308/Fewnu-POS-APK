import { Injectable } from '@angular/core';
import { product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  products: product[];
   
  constructor() { 

    this.products = [
      {
        id: 1,
        price: 1000,
        name: "Produit 1"
      },
      {
       id: 2,
       price: 2000,
       name: "Produit 2"
     },
     {
       id: 3,
       price: 3000,
       name: "Produit 3"
     },
     {
       id: 4,
       price: 4000,
       name: "Produit 4"
     },
    ];
  }

  /* this.p = [
     {
       id: 1,
       price: 1000,
       name: "Produit 1"
     },
     {
      id: 2,
      price: 2000,
      name: "Produit 2"
    },
    {
      id: 3,
      price: 3000,
      name: "Produit 3"
    },
    {
      id: 4,
      price: 4000,
      name: "Produit 4"
    },
  ]; */
  
}
