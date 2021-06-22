import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) {}

  logOut(): void {
    alert("sortir");
    this.ngFireAuth.signOut();
    this.router.navigate(['/login'])
    }
}
