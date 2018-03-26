import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventosDataProvider } from '../../providers/eventos-data/eventos-data';
import { CuentasDataProvider } from '../../providers/cuentas-data/cuentas-data';
import { ContactosDataProvider } from '../../providers/contactos-data/contactos-data';
import { AccionDataProvider } from '../../providers/accion-data/accion-data';
import { S2Component } from "../../component/s2.component";
import { s2SelectorShowResponse } from '../../interfaces/s2-selector-options';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage extends S2Component {
  profile: {};
  model: any;
  dataNoInterno: any[] = [];
  dataCoContacto: any[] = [];
  dataCoAccion: any[] = [];
  fecha: any;
  users: any[] = [];
  evento: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventosProvider: EventosDataProvider, public cuentasProvider: CuentasDataProvider, public contactosProvider: ContactosDataProvider, public accionProvider: AccionDataProvider) {
    super(navCtrl);
    this.model = {
      Fecha: '2018-03-14',
      Hora: '23:30',
      NoInterno: null,
      CoContacto: null,
      CoAccion: null,
      Descripcion: null,
      Respuesta: null,
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }
  //--------------ionViewWillEnter()--------------
  //Trae todos los Nointernos, CoContactos, CoAccion
  ionViewWillEnter() {
    this.cuentasProvider.allAsync()
      .subscribe(
        (data) => {
          console.log(data);
          this.dataNoInterno = data;
        },
        (error) => {
          console.error(error);
        }
      )
      this.contactosProvider.allAsync()
      .subscribe(
        (response) => {
          console.log(response);
          this.dataCoContacto = response.data;
        },
        (error) => {
          console.error(error);
        }
      )
    this.accionProvider.allAsync()
      .subscribe(
        (response) => {
          console.log(response);
          this.dataCoAccion = response.data;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  //--------------getAll()--------------
  getAll() {
    console.log('armar el DTO que espera el servidor -> copiarse el formato que envia el POST del IGGLOBAL Online')
    this.eventosProvider.allAsync()
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )
  }
  //--------------getOne()--------------
  getOne() {
    this.eventosProvider.oneAsync({ NoEvento: 475 })
      .subscribe(
        (data) => {
          console.log(data);
          this.evento = data.evento;
        },
        (error) => {
          console.log(error);
        }
      )
  }
  //-------------seleccionarNoInterno()---------------
  seleccionarNoInterno() {
    this.s2ShowSelector({
      title: 'No. Interno',
      id: 'NoInterno',
      descripcion: 'RazonSocial',
      selectedValue: this.model.NoInternoCE,
      options: this.dataNoInterno,
      //useGroups: true
    })
    .then((response:s2SelectorShowResponse ) => {
      console.log(response);
      this.model.NoInternoCE = response.id;
      this.model.NoInternoDescripcion = response.descripcion;
    })
  }
  //-------------seleccionCoContacto()---------------
  seleccionCoContacto() {
    this.s2ShowSelector({
      title: 'Co. Contacto',
      id: 'CoContacto',
      descripcion: 'Nombre',
      selectedValue: this.model.CoContactoSe,
      options: this.dataCoContacto,
      //useGroups: true
    })
    .then((response: s2SelectorShowResponse) => {
      console.log(response);
      this.model.CoContactoSe = response.id;
      this.model.CoContactoDescripcion = response.descripcion;
    })
  }
  //-------------seleccionCoAccion()---------------
  seleccionCoAccion() {
    this.s2ShowSelector({
      title: 'Co. Accion',
      id: 'CoAccion',
      descripcion: 'Accion',
      selectedValue: this.model.CoAccionSe,
      options: this.dataCoAccion,
      //useGroups: true
    })
    .then((response: s2SelectorShowResponse) => {
      console.log(response);
      this.model.CoAccionSe = response.id;
      this.model.CoAccionDescripcion = response.descripcion;
    })
  }

}
