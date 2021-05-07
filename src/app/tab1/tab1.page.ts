import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataServiceService } from '../data-service.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  filterTerm: string;
  products: any;
  panier: any = [];
  total: number = 0;
  items: any;
  item: any;
  newItems: any;
  listDay = [];
  result: any;
  tab = [];
  tab1 ;
  list = [];
  letterObj = {
    to: '',
    id: ''
  };
  prenom = localStorage.getItem('nom');
  phone = localStorage.getItem('userId');
  som = 0;
  pdfObj = null;
  file: any;
  plt: any;
  fileOpener: any;
  constructor(private dataService: DataServiceService,
              private navCtrl: NavController) {
    this.products = this.dataService.products;
    console.log(this.products);
    
  }

  async ngOnInit() {
    const panierStorage = await localStorage.getItem('panier')
    if(!panierStorage) this.panier = []
    else this.panier = JSON.parse(panierStorage);
  }

  openCart(){
    this.navCtrl.navigateForward('/ajout-product');
  }

  getProduct(id) {
    return this.products.find((item => item.id == id));
  }

  getTotalPanier() {
    let total = 0;
    this.panier.forEach(element => {
      total += element.price * element.q;
    });

    return total;
  }

  addPanier(id : any){
    let product = this.products.find(elt => elt.id == id)
    if(product) {
      let cartItem = this.panier.find(item => item.produit_id == id)
      if(!cartItem) {
        cartItem = {
          produit_id: id,
          price: product.price,
          q: 1
        }
        this.panier.push(cartItem)
      }else {
        let index = this.panier.indexOf(cartItem);
        cartItem.q++;
        this.panier[index] = cartItem
      }
      
      console.log(cartItem);
    }
    console.log(this.panier);
    
    localStorage.setItem('panier', JSON.stringify(this.panier))
  }

  addCart(id: any){
    let product = this.products.find(elt => elt.id == id)
    if(product) {
      let cartItem = this.panier.find(item => item.produit_id == id)
      if(!cartItem) {
        cartItem = {
          produit_id: id,
          price: product.price,
          q: 1
        }
        this.panier.push(cartItem)
      }else {
        let index = this.panier.indexOf(cartItem);
        cartItem.q++;
        this.panier[index] = cartItem
      }
      
      console.log(cartItem);
    }
    console.log(this.panier);
    
    localStorage.setItem('panier', JSON.stringify(this.panier))
  }

  removeItem(id: any){
    let product = this.products.find(elt => elt.id == id)
    if(product) {
      let cartItem = this.panier.find(item => item.produit_id == id)
      if(!cartItem) {
        cartItem = {
          produit_id: id,
          price: product.price,
          q: 1
        }
        this.panier.push(cartItem)
      }else {
        let index = this.panier.indexOf(cartItem);
        cartItem.q--;
        this.panier[index] = cartItem
      }
      
      console.log(cartItem);
    }
    console.log(this.panier);
    
    localStorage.setItem('panier', JSON.stringify(this.panier))
  }

}

