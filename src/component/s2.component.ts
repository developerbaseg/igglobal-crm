import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SelectorPage } from "../pages/selector/selector";
import { s2SelectorOptions } from '../interfaces/s2-selector-options';

@Injectable()
export class S2Component {
    constructor(public navCtrl: NavController){}
    // s2ShowSelector(options: s2SelectorOptions
    // ){
    s2ShowSelector(options: s2SelectorOptions){
        var promise = new Promise((resolve) => {
            options.useGroups = (options.useGroups)? true: false;
            this.navCtrl.push(SelectorPage, {
                title: options.title, //'Cuentas'
                id: options.id, //'id'
                descripcion: options.descripcion, //'name',
                selectedValue: options.selectedValue,
                useGroups: options.useGroups,
                options: this.s2GroupOrderData(options.options,options.descripcion,options.useGroups), //[1, 10, 20, 38, 50, 90],
                callback: (selectedValue)=>{
                    resolve(selectedValue);
                    return new Promise((r) => {
                        r();
                    });
                }                
            })
        });
        return promise;
    }

    s2GroupOrderData(data, column, gruop){
        gruop = (gruop)? true: false;
        let groupedData = [];
        let sortedContacts = data.sort((item1, item2) => {
          var textA = item1[column].toUpperCase();
          var textB = item2[column].toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        let currentLetter = false;
        let currentData = [];
    
        if(gruop){
          sortedContacts.forEach((value) => {
    
            if (value[column].charAt(0) != currentLetter) {
      
              currentLetter = value[column].charAt(0);
      
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