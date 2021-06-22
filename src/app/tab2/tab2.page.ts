import { Component, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public statut : string;
  public discut : string;
  public parame : string;
  public theme : string;
  public tof : string;


  public language : string;




  constructor(private renderer:Renderer2,
    private _platform       : Platform,
    ) {}


  themeChange(event){
    if(event.detail.checked){
      this.renderer.setAttribute(document.body,'color-theme', 'dark')



    }else{
      this.renderer.setAttribute(document.body,'color-theme', 'light')
    }
  }
  
  // public ionViewDidLoad() : void
  // {
  //    this._initialiseTranslation();
  // }

  // public changeLanguage() : void
  // {
  //    this._translateLanguage();
  // }

  // private _translateLanguage() : void
  // {
  //    this._translate.use(this.language);
  //    this._initialiseTranslation();    
  // }

  // private _initialiseTranslation() : void
  // {
  //    setTimeout(() => 
  //    {
  //       this.statut 			  = this._translate.instant("sap.statut");
  //       this.discut			  = this._translate.instant("sap.discut");
  //       this.parame 			  = this._translate.instant("sap.parame");
  //       this.theme 			  = this._translate.instant("sap.theme");
  //       this.tof         	= this._translate.instant("sap.tof");
  //    }, 250);
  // }

}


