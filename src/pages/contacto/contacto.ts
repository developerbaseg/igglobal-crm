import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactosDataProvider } from '../../providers/contactos-data/contactos-data';
import { CargosDataProvider } from '../../providers/cargos-data/cargos-data';
import { DepartamentosDataProvider } from '../../providers/departamentos-data/departamentos-data';
import { S2Component } from "../../component/s2.component";
import { s2SelectorShowResponse } from '../../interfaces/s2-selector-options';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage extends S2Component{
  profile:{};
  model: any;
  dataCoCargo: any[] =[];
  dataCoDepartamento: any[] =[];
  fecha: any;
  users: any[] = [];
  contacto: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public contactosProvider: ContactosDataProvider, public cargosProvider: CargosDataProvider, public departamentosProvider: DepartamentosDataProvider) {
    super(navCtrl);
    this.model = {
      // NoInterno: null,
      // Nombres: null, 
      // Apellidos: null,
      // CoContacto: null,
      // CoCargoSE: null,
      // Fecha: '2018-03-14',
      // Hora: '23:30',
      // Prioridad: 'B',
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ContactoPage');
  }
  //--------------ionViewWillEnter()--------------
  //Trae todos los datos de CoCargo y CoDepartamento
  ionViewWillEnter() {
    this.cargosProvider.allAsync()
      .subscribe(
        (response) => {
          //console.log(response);
          this.dataCoCargo = response.data;
        },
        (error) => {
          console.error(error);
        }
      )
    this.departamentosProvider.allAsync()
      .subscribe(
        (response) => {
          //console.log(response);
          this.dataCoDepartamento = response.data;
        },
        (error) => {
          console.error(error);
        }
      )
  }
//--------------getAll()--------------
  getAll() {
    console.log('armar el DTO que espera el servidor -> copiarse el formato que envia el POST del IGGLOBAL Online')
    //this.planificacionesProvider.saveAsync();
    this.contactosProvider.allAsync()
    .subscribe(
      (response) => { // Success
        console.log(response.data);

      },
      (error) =>{
        console.error(error);
      }
    )
  }
  //--------------getOne()--------------
  getOne(){
    this.contactosProvider.oneAsync({NoInterno:1,CoContacto:1})
    .subscribe(
      (data) => {
        console.log(data);
        this.contacto = data.contacto;
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  //--------------saveAll()--------------
  saveAll(){
    console.log('armar el DTO que espera el servidor -> copiarse el formato que envia el POST del IGGLOBAL Online')
    this.contactosProvider.saveAsync();
  }
  //-------------seleccionCoCargo()---------------
  seleccionCargo() {
    this.s2ShowSelector({
      title: 'Co. Cargo',
      id: 'CoCargo',
      descripcion: 'Cargo',
      selectedValue: this.model.CoCargoSe,
      options: this.dataCoCargo,
      //useGroups: true
    })
    .then((response: s2SelectorShowResponse) => {
      console.log(response);
      this.model.CoCargoSe = response.id;
      this.model.CoCargoDescripcion = response.descripcion;
    })
  }
  //-------------seleccionDepartamento()---------------
  seleccionDepartamento() {
    this.s2ShowSelector({
      title: 'Co. Departamento',
      id: 'CoDepartamento',
      descripcion: 'Departamento',
      selectedValue: this.model.CoDepartamentoSe,
      options: this.dataCoDepartamento,
      //useGroups: true
    })
    .then((response: s2SelectorShowResponse) => {
      console.log(response);
      this.model.CoDepartamentoSe = response.id;
      this.model.CoDepartamentoDescripcion = response.descripcion;
    })
  }

}
