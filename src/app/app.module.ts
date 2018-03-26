import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { S2Component } from '../component/s2.component';
import { SelectorPage } from '../pages/selector/selector';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { IGGlobalInterceptor } from "../interceptors/IGGlobalInterceptor";

import { PlanificacionPage } from '../pages/planificacion/planificacion';
import { PlanificacionesDataProvider } from '../providers/planificaciones-data/planificaciones-data';

import { EventoPage } from '../pages/evento/evento';
import { CuentaPage } from '../pages/cuenta/cuenta';
import { ContactoPage } from '../pages/contacto/contacto';
import { EventosDataProvider } from '../providers/eventos-data/eventos-data';
import { CuentasDataProvider } from '../providers/cuentas-data/cuentas-data';
import { ContactosDataProvider } from '../providers/contactos-data/contactos-data';
import { LegajosDataProvider } from '../providers/legajos-data/legajos-data';
import { CargosDataProvider } from '../providers/cargos-data/cargos-data';
import { DepartamentosDataProvider } from '../providers/departamentos-data/departamentos-data';
import { AccionDataProvider } from '../providers/accion-data/accion-data';

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    //propio de la app
    SelectorPage,
    PlanificacionPage,
    EventoPage,
    CuentaPage,
    ContactoPage
    //
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    //propio de la app
    SelectorPage,
    PlanificacionPage,
    EventoPage,
    CuentaPage,
    ContactoPage
    //
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IGGlobalInterceptor,
      multi: true
    },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    S2Component,
    PlanificacionesDataProvider,
    EventosDataProvider,
    CuentasDataProvider,
    ContactosDataProvider,
    LegajosDataProvider,
    CargosDataProvider,
    DepartamentosDataProvider,
    AccionDataProvider
  ]
})
export class AppModule { }
