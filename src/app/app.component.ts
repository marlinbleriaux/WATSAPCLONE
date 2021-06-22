import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _platform          : Platform,) {
    // this.initializeApp();
  }
  // initializeApp() {
  //   // other stuff...
  //   this.translate.setDefaultLang('en'); // add this
  // }
 
}