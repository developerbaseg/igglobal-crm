import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
//
import { S2Component } from '../../component/s2.component';

import { PlanificacionesDataProvider } from '../../providers/planificaciones-data/planificaciones-data';
import { CuentasDataProvider } from '../../providers/cuentas-data/cuentas-data';
import { s2SelectorShowResponse } from '../../interfaces/s2-selector-options';


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
export class PlanificacionPage extends S2Component {

  model: any;  
  fecha: any;
  
  constructor(
      //public s2Component: S2Component,  
      public navCtrl: NavController,
      public navParams: NavParams,
      public planificacionesProvider: PlanificacionesDataProvider,
      public cuentasProvider: CuentasDataProvider
  ) {
    super(navCtrl);
    // this.model = {
    //   detalles: [],
    //   NoRequerimiento: 0,
    //   GUID: '',
    //   RequerimientoDescripcion: ''
    // }
    this.model = {
      NoInterno: '5a99a997d8000a897714cefd',
      NoInternoDescripcion: 'Delgado, Janis',
      CoContacto: null,
      CoAccion: null,
      Descripcion: null,
      Usuario: null,
      Fecha: '2018-03-14',
      Hora: '23:30',
      Prioridad: 'B',
    }

  }

  NoInterno: any = '5a99a997d8000a897714cefd';
  Name: any = 'Delgado, Janis';

  CoContacto: any = '5a99a997463698effcf5507f';
  NameContacto: any = 'Craig, James';
  contacts = [
    {
      "id": "5a99a997d8000a897714cefd",
      "name": "Delgado, Janis"
    },
    {
      "id": "5a99a997463698effcf5507f",
      "name": "Craig, James"
    },
    {
      "id": "5a99a9970ba45bb1ea99724b",
      "name": "Thompson, Bentley"
    },
    {
      "id": "5a99a997ca28724a27dee40a",
      "name": "Bentley, Ramsey"
    },
    {
      "id": "5a99a99708b0c1b1dab393ee",
      "name": "Cortez, Isabel"
    },
    {
      "id": "5a99a997a79af4a69f5148c0",
      "name": "Payne, Georgina"
    },
    {
      "id": "5a99a997b33bb4de3efea020",
      "name": "Roth, Vilma"
    },
    {
      "id": "5a99a997a5d14e3b6eaf36fd",
      "name": "Horn, Phillips"
    },
    {
      "id": "5a99a997bb5f85b8fa5936a6",
      "name": "Mcconnell, Emilia"
    },
    {
      "id": "5a99a997b70c381514ac627d",
      "name": "Sampson, Marina"
    },
    {
      "id": "5a99a997cdfae06d7425e460",
      "name": "Bridges, England"
    },
    {
      "id": "5a99a9978cbf79d35159661d",
      "name": "Carrillo, Decker"
    },
    {
      "id": "5a99a997b541d1d08a54ae99",
      "name": "Snyder, Alexis"
    },
    {
      "id": "5a99a997b4f097cbe82a52b9",
      "name": "Reynolds, Sondra"
    },
    {
      "id": "5a99a997c8eeb0d28c5ca343",
      "name": "Park, Lauri"
    },
    {
      "id": "5a99a9973fb3c5be22ff8ec3",
      "name": "Benjamin, Winters"
    },
    {
      "id": "5a99a9978b24ed020b3a3175",
      "name": "Randall, Krista"
    },
    {
      "id": "5a99a99700562696ee27ca92",
      "name": "Coleman, Griffith"
    },
    {
      "id": "5a99a997f955170f631af969",
      "name": "Davidson, Stacey"
    },
    {
      "id": "5a99a9975a1b5dcb1da0c548",
      "name": "Riggs, Campbell"
    },
    {
      "id": "5a99a9977c0ac735ad7b57d8",
      "name": "Larson, Tammy"
    },
    {
      "id": "5a99a99798a1387cc93a7cc7",
      "name": "Ferguson, Margret"
    },
    {
      "id": "5a99a9976dca080168baf4c9",
      "name": "Johnson, Phelps"
    },
    {
      "id": "5a99a9976f44cc8f02af848e",
      "name": "Osborne, Georgia"
    },
    {
      "id": "5a99a99701ea0906792a8f7c",
      "name": "Barlow, Park"
    },
    {
      "id": "5a99a99752ef2db21cb14d03",
      "name": "Garrison, Iva"
    },
    {
      "id": "5a99a9979a215b81c8308a6d",
      "name": "Valdez, Abby"
    },
    {
      "id": "5a99a997e7fbe3fe2742497f",
      "name": "Marshall, Stafford"
    },
    {
      "id": "5a99a99769e72cb944d8a1b0",
      "name": "Stewart, Gamble"
    },
    {
      "id": "5a99a997d3267f30ee9855d3",
      "name": "Mcdaniel, Queen"
    },
    {
      "id": "5a99a99794e43df838b86ed7",
      "name": "Huff, Kristina"
    },
    {
      "id": "5a99a9971ca2f89925990602",
      "name": "Wood, Foreman"
    },
    {
      "id": "5a99a99779dae3ed627edff2",
      "name": "Fitzpatrick, Adkins"
    },
    {
      "id": "5a99a9972aed33d9811f388f",
      "name": "Stark, Finch"
    },
    {
      "id": "5a99a997500c8a894b277e5d",
      "name": "Daniel, Valenzuela"
    },
    {
      "id": "5a99a9977f08c6192010909b",
      "name": "Mercer, Ochoa"
    },
    {
      "id": "5a99a997e687c68d96aaa414",
      "name": "Mann, Nelda"
    },
    {
      "id": "5a99a9974c8d9b54928a21f4",
      "name": "James, Tracey"
    },
    {
      "id": "5a99a997a66b27190e9387b1",
      "name": "Solis, Rosemarie"
    },
    {
      "id": "5a99a997bbe43baef40eb1ba",
      "name": "Moss, Susanna"
    },
    {
      "id": "5a99a997e9fa13834bca0a4b",
      "name": "Farmer, Frazier"
    },
    {
      "id": "5a99a9979ccfaf0e93ecf621",
      "name": "Fuentes, Marquita"
    },
    {
      "id": "5a99a997dfc809f47e159200",
      "name": "Downs, Cindy"
    },
    {
      "id": "5a99a99779e16d8e8bbf02b6",
      "name": "Nichols, Harriet"
    },
    {
      "id": "5a99a997d2e189f57eadd9a6",
      "name": "Chase, Velma"
    },
    {
      "id": "5a99a997ec8da8937c0560ec",
      "name": "Willis, Arnold"
    },
    {
      "id": "5a99a9974ecc42bbeaba63d5",
      "name": "Aguilar, Mcdonald"
    },
    {
      "id": "5a99a997d03c2eb42397e1d2",
      "name": "Rocha, Wendy"
    },
    {
      "id": "5a99a99741b9a328aca6cb40",
      "name": "Hanson, Carey"
    },
    {
      "id": "5a99a99750c0a6b920b4c311",
      "name": "Edwards, Donna"
    },
    {
      "id": "5a99a9971f1fec72817e3dda",
      "name": "Jimenez, Winifred"
    },
    {
      "id": "5a99a997ab5a278332b61118",
      "name": "Duke, Golden"
    },
    {
      "id": "5a99a997956f27a58d807bfe",
      "name": "Wiley, Angelina"
    },
    {
      "id": "5a99a99755b519ed4ce09e87",
      "name": "Fitzgerald, Jerri"
    },
    {
      "id": "5a99a997162c80af1f1d76a4",
      "name": "Hickman, Gabrielle"
    },
    {
      "id": "5a99a9972420156d27f6b603",
      "name": "Newton, Ramirez"
    },
    {
      "id": "5a99a99763dfb6409daded62",
      "name": "Williamson, Sawyer"
    },
    {
      "id": "5a99a9972951d148c46e7185",
      "name": "Green, Geraldine"
    },
    {
      "id": "5a99a997e68df9c2631b3e08",
      "name": "Mcintosh, Kristy"
    },
    {
      "id": "5a99a997d4589d446e81dc21",
      "name": "Mccarty, Muriel"
    },
    {
      "id": "5a99a9978225eb8316e8486f",
      "name": "Norris, Marylou"
    },
    {
      "id": "5a99a997cc9cdd4707857d94",
      "name": "Ward, Monroe"
    },
    {
      "id": "5a99a997b4bd49ea51d47445",
      "name": "Tate, Beach"
    },
    {
      "id": "5a99a9972b869e0943b2a391",
      "name": "Cantrell, Erica"
    },
    {
      "id": "5a99a9978b8d600bf3760f3a",
      "name": "Baxter, Swanson"
    },
    {
      "id": "5a99a99737f36f8fbaa805c3",
      "name": "William, Douglas"
    },
    {
      "id": "5a99a997f1d0286cc4dfc887",
      "name": "Mcdowell, Fields"
    },
    {
      "id": "5a99a997bc032ed37763a68d",
      "name": "Joseph, Marianne"
    },
    {
      "id": "5a99a997b5bec5ad7b08a617",
      "name": "Shepherd, Jacqueline"
    },
    {
      "id": "5a99a99702cf382884f840cb",
      "name": "Church, Pennington"
    },
    {
      "id": "5a99a99783e40b5fa829da44",
      "name": "Hubbard, Benton"
    },
    {
      "id": "5a99a9974b5c58109b721ac6",
      "name": "May, Dudley"
    },
    {
      "id": "5a99a997979169dbafc6f588",
      "name": "Hensley, Elinor"
    },
    {
      "id": "5a99a9972cbfc53fdbc5534b",
      "name": "Rios, Kari"
    },
    {
      "id": "5a99a997a0d3671a1cd005a8",
      "name": "Quinn, Mckee"
    },
    {
      "id": "5a99a997bf0ae08b41c05045",
      "name": "Dixon, Brigitte"
    },
    {
      "id": "5a99a997c2f04dddbe26fcba",
      "name": "Walker, Earnestine"
    },
    {
      "id": "5a99a9975c7e478e094c3997",
      "name": "Holt, Ava"
    },
    {
      "id": "5a99a9977c75fd60796b27db",
      "name": "Skinner, Dianne"
    },
    {
      "id": "5a99a997ea1d7ad2ec74d674",
      "name": "Walters, Aimee"
    },
    {
      "id": "5a99a9973ff50e36bc822cec",
      "name": "Young, Mildred"
    },
    {
      "id": "5a99a997bb18dafc74ef37f0",
      "name": "Hale, Lauren"
    },
    {
      "id": "5a99a997127fd17dddfa5e5b",
      "name": "Pennington, Marcie"
    },
    {
      "id": "5a99a997b804516615727b53",
      "name": "Burnett, Cannon"
    },
    {
      "id": "5a99a99754973280c9f09fc9",
      "name": "Duffy, Kelley"
    },
    {
      "id": "5a99a997c7bef2b2e5b99798",
      "name": "Mcmahon, Forbes"
    },
    {
      "id": "5a99a997fb270bab0088e3d9",
      "name": "Waters, Ortega"
    },
    {
      "id": "5a99a99753dc9b5a31de81f8",
      "name": "Knox, Brittany"
    },
    {
      "id": "5a99a9975c35c0877ed02e91",
      "name": "Guy, Maribel"
    },
    {
      "id": "5a99a997cc414672ba0439fa",
      "name": "Clay, Cherie"
    },
    {
      "id": "5a99a997620e478bb2411323",
      "name": "Gay, Marva"
    },
    {
      "id": "5a99a997b1bd7a497cacfd5b",
      "name": "Terrell, Rosalyn"
    },
    {
      "id": "5a99a9979144638acb15a32c",
      "name": "Workman, Lina"
    },
    {
      "id": "5a99a99704398e2dd542c016",
      "name": "Brown, Ines"
    },
    {
      "id": "5a99a997219ba56c797852ce",
      "name": "Harmon, Rhodes"
    },
    {
      "id": "5a99a997dd592a230c915424",
      "name": "Rojas, Callie"
    },
    {
      "id": "5a99a997f4daff48144322c2",
      "name": "Koch, Landry"
    },
    {
      "id": "5a99a997512baf906d24d1c1",
      "name": "Case, Roxanne"
    },
    {
      "id": "5a99a99709d89ce0cce4cf38",
      "name": "Herring, Buchanan"
    },
    {
      "id": "5a99a9971500251ae3df0ebf",
      "name": "Barron, Burt"
    },
    {
      "id": "5a99a997daefc7306ea4863b",
      "name": "Walls, Clayton"
    },
    {
      "id": "5a99a9974c8d811ae55980c5",
      "name": "Thomas, Herminia"
    },
    {
      "id": "5a99a997ead3d346c0de77d0",
      "name": "Garner, Sherri"
    },
    {
      "id": "5a99a9976df335f77f104a86",
      "name": "Chandler, Hodge"
    },
    {
      "id": "5a99a997486155f69839ca8b",
      "name": "Hall, Justice"
    },
    {
      "id": "5a99a997825fe47f7123b8b3",
      "name": "Greer, Atkinson"
    },
    {
      "id": "5a99a9970d9c13c32573fe6b",
      "name": "Morales, Little"
    },
    {
      "id": "5a99a997eaeaa9ed33548d3e",
      "name": "Melendez, Marion"
    },
    {
      "id": "5a99a997dfce630912ed2b3d",
      "name": "Webster, Savannah"
    },
    {
      "id": "5a99a997aa9600e0a193aa7b",
      "name": "Rasmussen, Hurley"
    },
    {
      "id": "5a99a997d1b3994f61107137",
      "name": "Reed, Howard"
    },
    {
      "id": "5a99a99792b0bc0dc945c098",
      "name": "Hudson, Gilbert"
    },
    {
      "id": "5a99a99705c5677efc13edae",
      "name": "Buck, Shields"
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanificacionPage');

    // this.cuentasProvider.allAsync()
    // .subscribe(
    //   (data) => { // Success
    //     console.log(data);
    //   },
    //   (error) =>{
    //     console.error(error);
    //   }
    // )
  }

  send() {
    console.log('armar el DTO que espera el servidor -> copiarse el formato que envia el POST del IGGLOBAL Online')
    //this.planificacionesProvider.saveAsync();
    //this.planificacionesProvider.allAsync();
    this.planificacionesProvider.allAsync()
    .subscribe(
      (data) => { // Success
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  seleccionarCuenta() {
    // this.selectorCtrl.show({
    //   title: 'Cuentas',
    //   value: '',
    //   descripcion: '',
    //   useGroups: true,
    //   options: [],
    //   callback: null,
    // }, selectedValue)
    const _contacts = this.contacts;
    this.s2ShowSelector({
      title: 'Cuentas',
      id: 'id',
      descripcion: 'name',
      selectedValue: this.model.NoInterno,
      options: _contacts,
      useGroups: true})
    .then((response: s2SelectorShowResponse) => {
      console.log(response);
      this.model.NoInterno = response.id;
      this.model.NoInternoDescripcion = response.descripcion;    
    })
    // .then(function(selectedValue) {
    //   console.log(selectedValue);
    // })

    // this.navCtrl.push(SelectorPage, {
    //   title: 'Cuentas',
    //   id:'id',
    //   descripcion: 'name',
    //   useGroups: true,
    //   options: this.getDataAgrupada('name',true), //[1, 10, 20, 38, 50, 90],
    //   selectedValue: this.model.NoInterno,
    //   callback: this.myCallbackFunction
    // })
  }

  // myCallbackFunction = (selectedValue) => {
  //   return new Promise((resolve) => {
  //     this.model.NoInterno = selectedValue.id;
  //     this.model.NoInternoDescripcion = selectedValue.descripcion;
  //     resolve();
  //   });
  // }

// this.s2ShowSelector

// seleccionarContacto() {
//   const _contacts = this.contacts;
//   //let options: s2SelectorOptions = 
//   this.s2ShowSelector({
//     value: 'asds'
//   })
//   .then((response) => {
//     console.log(response);
//     this.CoContacto = response.id;
//     this.NameContacto = response.descripcion;
//   })

  seleccionarContacto() {
    const _contacts = this.contacts;
    this.s2ShowSelector({
        title:'Contactos',
        id:'id',
        descripcion:'name',
        selectedValue:this.CoContacto,
        options: _contacts
      })
    .then((response: s2SelectorShowResponse) => {
      console.log(response);
      this.CoContacto = response.id;
      this.NameContacto = response.descripcion;
    })
    // this.navCtrl.push(SelectorPage, {
    //   title: 'Contactos',
    //   id:'id',
    //   descripcion: 'name',
    //   options: this.getDataAgrupada('name'), //[1, 10, 20, 38, 50, 90],
    //   selectedValue: this.CoContacto,
    //   callback: this.myCallbackFunctionContacto,
    //   //useGroups: true,

    // }).then((data) => {
    //   console.log("REPONERETURN");
    //   console.log(data);
    // })
  }

  
  // myCallbackFunctionContacto = (selectedValue) => {
  //   // return new Promise((resolve) => {
  //   //   this.CoContacto = selectedValue.id;
  //   //   this.NameContacto = selectedValue.descripcion;
  //   //   resolve();
  //   // });
  // }

  getDataAgrupada(name, grouped?) {
    grouped = (grouped)? true: false;
    var contacts = [
      {
        "id": "5a99a997d8000a897714cefd",
        "name": "Delgado, Janis"
      },
      {
        "id": "5a99a997463698effcf5507f",
        "name": "Craig, James"
      },
      {
        "id": "5a99a9970ba45bb1ea99724b",
        "name": "Thompson, Bentley"
      },
      {
        "id": "5a99a997ca28724a27dee40a",
        "name": "Bentley, Ramsey"
      },
      {
        "id": "5a99a99708b0c1b1dab393ee",
        "name": "Cortez, Isabel"
      },
      {
        "id": "5a99a997a79af4a69f5148c0",
        "name": "Payne, Georgina"
      },
      {
        "id": "5a99a997b33bb4de3efea020",
        "name": "Roth, Vilma"
      },
      {
        "id": "5a99a997a5d14e3b6eaf36fd",
        "name": "Horn, Phillips"
      },
      {
        "id": "5a99a997bb5f85b8fa5936a6",
        "name": "Mcconnell, Emilia"
      },
      {
        "id": "5a99a997b70c381514ac627d",
        "name": "Sampson, Marina"
      },
      {
        "id": "5a99a997cdfae06d7425e460",
        "name": "Bridges, England"
      },
      {
        "id": "5a99a9978cbf79d35159661d",
        "name": "Carrillo, Decker"
      },
      {
        "id": "5a99a997b541d1d08a54ae99",
        "name": "Snyder, Alexis"
      },
      {
        "id": "5a99a997b4f097cbe82a52b9",
        "name": "Reynolds, Sondra"
      },
      {
        "id": "5a99a997c8eeb0d28c5ca343",
        "name": "Park, Lauri"
      },
      {
        "id": "5a99a9973fb3c5be22ff8ec3",
        "name": "Benjamin, Winters"
      },
      {
        "id": "5a99a9978b24ed020b3a3175",
        "name": "Randall, Krista"
      },
      {
        "id": "5a99a99700562696ee27ca92",
        "name": "Coleman, Griffith"
      },
      {
        "id": "5a99a997f955170f631af969",
        "name": "Davidson, Stacey"
      },
      {
        "id": "5a99a9975a1b5dcb1da0c548",
        "name": "Riggs, Campbell"
      },
      {
        "id": "5a99a9977c0ac735ad7b57d8",
        "name": "Larson, Tammy"
      },
      {
        "id": "5a99a99798a1387cc93a7cc7",
        "name": "Ferguson, Margret"
      },
      {
        "id": "5a99a9976dca080168baf4c9",
        "name": "Johnson, Phelps"
      },
      {
        "id": "5a99a9976f44cc8f02af848e",
        "name": "Osborne, Georgia"
      },
      {
        "id": "5a99a99701ea0906792a8f7c",
        "name": "Barlow, Park"
      },
      {
        "id": "5a99a99752ef2db21cb14d03",
        "name": "Garrison, Iva"
      },
      {
        "id": "5a99a9979a215b81c8308a6d",
        "name": "Valdez, Abby"
      },
      {
        "id": "5a99a997e7fbe3fe2742497f",
        "name": "Marshall, Stafford"
      },
      {
        "id": "5a99a99769e72cb944d8a1b0",
        "name": "Stewart, Gamble"
      },
      {
        "id": "5a99a997d3267f30ee9855d3",
        "name": "Mcdaniel, Queen"
      },
      {
        "id": "5a99a99794e43df838b86ed7",
        "name": "Huff, Kristina"
      },
      {
        "id": "5a99a9971ca2f89925990602",
        "name": "Wood, Foreman"
      },
      {
        "id": "5a99a99779dae3ed627edff2",
        "name": "Fitzpatrick, Adkins"
      },
      {
        "id": "5a99a9972aed33d9811f388f",
        "name": "Stark, Finch"
      },
      {
        "id": "5a99a997500c8a894b277e5d",
        "name": "Daniel, Valenzuela"
      },
      {
        "id": "5a99a9977f08c6192010909b",
        "name": "Mercer, Ochoa"
      },
      {
        "id": "5a99a997e687c68d96aaa414",
        "name": "Mann, Nelda"
      },
      {
        "id": "5a99a9974c8d9b54928a21f4",
        "name": "James, Tracey"
      },
      {
        "id": "5a99a997a66b27190e9387b1",
        "name": "Solis, Rosemarie"
      },
      {
        "id": "5a99a997bbe43baef40eb1ba",
        "name": "Moss, Susanna"
      },
      {
        "id": "5a99a997e9fa13834bca0a4b",
        "name": "Farmer, Frazier"
      },
      {
        "id": "5a99a9979ccfaf0e93ecf621",
        "name": "Fuentes, Marquita"
      },
      {
        "id": "5a99a997dfc809f47e159200",
        "name": "Downs, Cindy"
      },
      {
        "id": "5a99a99779e16d8e8bbf02b6",
        "name": "Nichols, Harriet"
      },
      {
        "id": "5a99a997d2e189f57eadd9a6",
        "name": "Chase, Velma"
      },
      {
        "id": "5a99a997ec8da8937c0560ec",
        "name": "Willis, Arnold"
      },
      {
        "id": "5a99a9974ecc42bbeaba63d5",
        "name": "Aguilar, Mcdonald"
      },
      {
        "id": "5a99a997d03c2eb42397e1d2",
        "name": "Rocha, Wendy"
      },
      {
        "id": "5a99a99741b9a328aca6cb40",
        "name": "Hanson, Carey"
      },
      {
        "id": "5a99a99750c0a6b920b4c311",
        "name": "Edwards, Donna"
      },
      {
        "id": "5a99a9971f1fec72817e3dda",
        "name": "Jimenez, Winifred"
      },
      {
        "id": "5a99a997ab5a278332b61118",
        "name": "Duke, Golden"
      },
      {
        "id": "5a99a997956f27a58d807bfe",
        "name": "Wiley, Angelina"
      },
      {
        "id": "5a99a99755b519ed4ce09e87",
        "name": "Fitzgerald, Jerri"
      },
      {
        "id": "5a99a997162c80af1f1d76a4",
        "name": "Hickman, Gabrielle"
      },
      {
        "id": "5a99a9972420156d27f6b603",
        "name": "Newton, Ramirez"
      },
      {
        "id": "5a99a99763dfb6409daded62",
        "name": "Williamson, Sawyer"
      },
      {
        "id": "5a99a9972951d148c46e7185",
        "name": "Green, Geraldine"
      },
      {
        "id": "5a99a997e68df9c2631b3e08",
        "name": "Mcintosh, Kristy"
      },
      {
        "id": "5a99a997d4589d446e81dc21",
        "name": "Mccarty, Muriel"
      },
      {
        "id": "5a99a9978225eb8316e8486f",
        "name": "Norris, Marylou"
      },
      {
        "id": "5a99a997cc9cdd4707857d94",
        "name": "Ward, Monroe"
      },
      {
        "id": "5a99a997b4bd49ea51d47445",
        "name": "Tate, Beach"
      },
      {
        "id": "5a99a9972b869e0943b2a391",
        "name": "Cantrell, Erica"
      },
      {
        "id": "5a99a9978b8d600bf3760f3a",
        "name": "Baxter, Swanson"
      },
      {
        "id": "5a99a99737f36f8fbaa805c3",
        "name": "William, Douglas"
      },
      {
        "id": "5a99a997f1d0286cc4dfc887",
        "name": "Mcdowell, Fields"
      },
      {
        "id": "5a99a997bc032ed37763a68d",
        "name": "Joseph, Marianne"
      },
      {
        "id": "5a99a997b5bec5ad7b08a617",
        "name": "Shepherd, Jacqueline"
      },
      {
        "id": "5a99a99702cf382884f840cb",
        "name": "Church, Pennington"
      },
      {
        "id": "5a99a99783e40b5fa829da44",
        "name": "Hubbard, Benton"
      },
      {
        "id": "5a99a9974b5c58109b721ac6",
        "name": "May, Dudley"
      },
      {
        "id": "5a99a997979169dbafc6f588",
        "name": "Hensley, Elinor"
      },
      {
        "id": "5a99a9972cbfc53fdbc5534b",
        "name": "Rios, Kari"
      },
      {
        "id": "5a99a997a0d3671a1cd005a8",
        "name": "Quinn, Mckee"
      },
      {
        "id": "5a99a997bf0ae08b41c05045",
        "name": "Dixon, Brigitte"
      },
      {
        "id": "5a99a997c2f04dddbe26fcba",
        "name": "Walker, Earnestine"
      },
      {
        "id": "5a99a9975c7e478e094c3997",
        "name": "Holt, Ava"
      },
      {
        "id": "5a99a9977c75fd60796b27db",
        "name": "Skinner, Dianne"
      },
      {
        "id": "5a99a997ea1d7ad2ec74d674",
        "name": "Walters, Aimee"
      },
      {
        "id": "5a99a9973ff50e36bc822cec",
        "name": "Young, Mildred"
      },
      {
        "id": "5a99a997bb18dafc74ef37f0",
        "name": "Hale, Lauren"
      },
      {
        "id": "5a99a997127fd17dddfa5e5b",
        "name": "Pennington, Marcie"
      },
      {
        "id": "5a99a997b804516615727b53",
        "name": "Burnett, Cannon"
      },
      {
        "id": "5a99a99754973280c9f09fc9",
        "name": "Duffy, Kelley"
      },
      {
        "id": "5a99a997c7bef2b2e5b99798",
        "name": "Mcmahon, Forbes"
      },
      {
        "id": "5a99a997fb270bab0088e3d9",
        "name": "Waters, Ortega"
      },
      {
        "id": "5a99a99753dc9b5a31de81f8",
        "name": "Knox, Brittany"
      },
      {
        "id": "5a99a9975c35c0877ed02e91",
        "name": "Guy, Maribel"
      },
      {
        "id": "5a99a997cc414672ba0439fa",
        "name": "Clay, Cherie"
      },
      {
        "id": "5a99a997620e478bb2411323",
        "name": "Gay, Marva"
      },
      {
        "id": "5a99a997b1bd7a497cacfd5b",
        "name": "Terrell, Rosalyn"
      },
      {
        "id": "5a99a9979144638acb15a32c",
        "name": "Workman, Lina"
      },
      {
        "id": "5a99a99704398e2dd542c016",
        "name": "Brown, Ines"
      },
      {
        "id": "5a99a997219ba56c797852ce",
        "name": "Harmon, Rhodes"
      },
      {
        "id": "5a99a997dd592a230c915424",
        "name": "Rojas, Callie"
      },
      {
        "id": "5a99a997f4daff48144322c2",
        "name": "Koch, Landry"
      },
      {
        "id": "5a99a997512baf906d24d1c1",
        "name": "Case, Roxanne"
      },
      {
        "id": "5a99a99709d89ce0cce4cf38",
        "name": "Herring, Buchanan"
      },
      {
        "id": "5a99a9971500251ae3df0ebf",
        "name": "Barron, Burt"
      },
      {
        "id": "5a99a997daefc7306ea4863b",
        "name": "Walls, Clayton"
      },
      {
        "id": "5a99a9974c8d811ae55980c5",
        "name": "Thomas, Herminia"
      },
      {
        "id": "5a99a997ead3d346c0de77d0",
        "name": "Garner, Sherri"
      },
      {
        "id": "5a99a9976df335f77f104a86",
        "name": "Chandler, Hodge"
      },
      {
        "id": "5a99a997486155f69839ca8b",
        "name": "Hall, Justice"
      },
      {
        "id": "5a99a997825fe47f7123b8b3",
        "name": "Greer, Atkinson"
      },
      {
        "id": "5a99a9970d9c13c32573fe6b",
        "name": "Morales, Little"
      },
      {
        "id": "5a99a997eaeaa9ed33548d3e",
        "name": "Melendez, Marion"
      },
      {
        "id": "5a99a997dfce630912ed2b3d",
        "name": "Webster, Savannah"
      },
      {
        "id": "5a99a997aa9600e0a193aa7b",
        "name": "Rasmussen, Hurley"
      },
      {
        "id": "5a99a997d1b3994f61107137",
        "name": "Reed, Howard"
      },
      {
        "id": "5a99a99792b0bc0dc945c098",
        "name": "Hudson, Gilbert"
      },
      {
        "id": "5a99a99705c5677efc13edae",
        "name": "Buck, Shields"
      }
    ];
    


    return this.agrupar(contacts, name, grouped);
  }

  agrupar(dataGruop, descripcion,gruoped) {
    let groupedData = [];
    let sortedContacts = dataGruop.sort((item1, item2) => {
      var textA = item1[descripcion].toUpperCase();
      var textB = item2[descripcion].toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    let currentLetter = false;
    let currentData = [];

    if(gruoped){
      sortedContacts.forEach((value) => {

        if (value[descripcion].charAt(0) != currentLetter) {
  
          currentLetter = value[descripcion].charAt(0);
  
          let newGroup = {
            letter: currentLetter,
            items: []
          };
  
          currentData = newGroup.items;
          groupedData.push(newGroup);
  
        }
  
        currentData.push(value);
      });
    } else {
      groupedData = sortedContacts;
    }
    

    return groupedData;
  }


}
