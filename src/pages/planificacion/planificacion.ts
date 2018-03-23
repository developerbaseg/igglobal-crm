import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanificacionesDataProvider } from '../../providers/planificaciones-data/planificaciones-data';

/**
 * Generated class for the PlanificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-planificacion',
  templateUrl: 'planificacion.html',
})
export class PlanificacionPage {
  profile:{};
  model: any;  
  fecha: any;
  users: any[] = [];
  planificacion: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public planificacionesProvider: PlanificacionesDataProvider) {
    // this.model = {
    //   detalles: [],
    //   NoRequerimiento: 0,
    //   GUID: '',
    //   RequerimientoDescripcion: ''
    // }
    this.model = {
      NoInterno: null,
      CoContacto: null,
      CoAccion: null,
      Descripcion: null,
      Usuario: null,
      Fecha: '2018-03-14',
      Hora: '23:30',
      Prioridad: 'B',
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanificacionPage');
  }

  send() {
    console.log('armar el DTO que espera el servidor -> copiarse el formato que envia el POST del IGGLOBAL Online')
    //this.planificacionesProvider.saveAsync();
    this.planificacionesProvider.allAsync()
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  //----------------------------
  getOne(){
    this.planificacionesProvider.oneAsync({NoRequerimiento:41})
    .subscribe(
      (data) => {
        console.log(data);
        this.planificacion = data.planificacion;
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  //----------------------------
}
