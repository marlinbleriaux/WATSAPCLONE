import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscutionPrincipalePageRoutingModule } from './discution-principale-routing.module';

import { DiscutionPrincipalePage } from './discution-principale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscutionPrincipalePageRoutingModule
  ],
  declarations: [DiscutionPrincipalePage]
})
export class DiscutionPrincipalePageModule {}
