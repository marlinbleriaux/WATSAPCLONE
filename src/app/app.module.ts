import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationPage } from './conversation/conversation.page';

import { environment } from '../environments/environment';

import{AngularFireModule} from '@angular/fire';
import{AngularFireAuth, AngularFireAuthModule}  from'@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



// AoT requires an exported function for factories

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.
    firebase), Ng2SearchPipeModule,AngularFireAuthModule,AngularFirestoreModule, AngularFireDatabaseModule,AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
 