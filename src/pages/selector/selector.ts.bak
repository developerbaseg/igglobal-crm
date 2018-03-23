import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the SelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-selector',
  templateUrl: 'selector.html',
})
export class SelectorPage {

  selected;
  optionsForm;
  options: any[] = [];
  title: string = '';
  useGroups: boolean = false;
  selectedValue: any = null;
  id: string = 'id';
  descripcion : string = 'descripcion';
  callback: any = null;
  queryText: any = '';
  returnObject: any = {
    id: '',
    descripcion: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionsForm = new FormGroup({
      "selected": new FormControl()
    });

    Object.keys(navParams.data).forEach(key => { 
      let value = navParams.get(key); 
      if(value != undefined){
        this[key] = value;
      }
    });
    // this.id = navParams.get('id');
    // this.descripcion = navParams.get('descripcion');
    // this.options = navParams.get('options');
    // this.title = navParams.get('title');
    // this.selectedValue = navParams.get('selectedValue');
    // if (navParams.get('useGroups') != undefined){
    //     this.useGroups = navParams.get('useGroups');
    // }
    
  }

  ionViewDidLoad() {
  }

  ok() {
    this.returnObject.id = this.selectedValue;

    if (this.useGroups) {
      this.options.forEach((item: any) => {
        item.items.forEach((itemv: any) => {
          if(itemv[this.id] == this.selectedValue){
            this.returnObject.descripcion =  itemv[this.descripcion];
          }
        });
      });
    } else {
      this.options.forEach((item: any) => {
        if(item[this.id] == this.selectedValue){
          this.returnObject.descripcion = item[this.descripcion];
        }
      });
    }
      //{id:this.selectedValue, descripcion:this.descripcion}
    this.callback(this.returnObject).then(() => {
      this.navCtrl.pop();
    });

  }

  ionViewWillEnter() {
    this.queryText='';
    this.search();
    this.callback = this.navParams.get("callback")
  }

  search() {
    this.filterData(this.queryText, this.options, this.descripcion);
  }

  filterData(queryText, target, property) {
    queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
    let queryWords = queryText.split(' ').filter(w => !!w.trim().length);

    if (this.useGroups) {
      target.forEach((group: any) => {
        group.hide = true;
        group.items.forEach((item: any) => {
          this.filterItem(item, queryWords, property);
          if (!item.hide) {
            group.hide = false;
          }
        });
      });
    } else {
      target.forEach((item: any) => {
        this.filterItem(item, queryWords, property);
      });
    }
  }

  filterItem(item: any, queryWords: any, property:any) {
    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach((queryWord: string) => {
        if (item[property].toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }
    
    item.hide = !matchesQueryText;
  }
}

