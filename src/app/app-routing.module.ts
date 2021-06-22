import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule)
  },
  {
    path: 'create-compte',
    loadChildren: () => import('./create-compte/create-compte.module').then( m => m.CreateComptePageModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule)
  },
 
  
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'discution-principale',
    loadChildren: () => import('./discution-principale/discution-principale.module').then( m => m.DiscutionPrincipalePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
