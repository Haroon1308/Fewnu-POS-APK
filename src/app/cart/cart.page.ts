import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { DataServiceService } from '../data-service.service';
import { itemCart } from '../models/item-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage  {
  cartItem: itemCart[];
  total: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ModalController,
    public storage: Storage,
    public toast: ToastController,
    public alerte: AlertController,
    //public method: MethodProvider
  ) {
                 
   }


 /*  ngOnInit() {
  } */
  
}
