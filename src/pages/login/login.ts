import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';

import { PlanificacionPage } from '../planificacion/planificacion';

import { EventoPage } from '../evento/evento';

import { CuentaPage } from '../cuenta/cuenta';

import { ContactoPage } from '../contacto/contacto';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(PlanificacionPage);
  }

  onEventoapp() {
    this.navCtrl.push(EventoPage);
  }

  onCuentaapp() {
    this.navCtrl.push(CuentaPage);
  }

  onContactoapp() {
    this.navCtrl.push(ContactoPage);
  }

}

