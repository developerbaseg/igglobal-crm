import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CuentasDataProvider } from '../../providers/cuentas-data/cuentas-data';

/**
 * Generated class for the CuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage {
  profile:{};
  model: any;  
  fecha: any;
  users: any[] = [];
  cuenta: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public cuentasProvider: CuentasDataProvider) {
    this.model = {
      // NoInterno: null,
      // CoCuenta: null,
      // RazonSocial: null,
      // Denominacion: null,
      // Observaciones: null,
      // CoEstado: null,
      // Domicilio: null,
      // Localidad: null,
      // CoPostal: null,
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaPage');
  }

  send() {
    console.log('armar el DTO que espera el servidor -> copiarse el formato que envia el POST del IGGLOBAL Online')
    //this.planificacionesProvider.saveAsync();
    this.cuentasProvider.allAsync()
    .subscribe(
      (data) => { // Success
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  //----------------------------
  getOne(){
    this.cuentasProvider.oneAsync({NoInterno:1})
    .subscribe(
      (data) => {
        console.log(data);
        this.cuenta = data.cuenta;
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  //----------------------------
}
