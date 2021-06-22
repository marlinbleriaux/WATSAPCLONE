import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscutionPrincipalePage } from './discution-principale.page';

const routes: Routes = [
  {
    path: '',
    component: DiscutionPrincipalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscutionPrincipalePageRoutingModule {}
