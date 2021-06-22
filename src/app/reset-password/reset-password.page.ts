import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase.config';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  fgr
  user = {

    email: '',
    password: ''
  }
  

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) {
    
 }
 
  ngOnInit() {
    
  }
  
  async resetPass() {
    
    const user = await this.ngFireAuth.sendPasswordResetEmail(this.user.email);

    console.log(this.user.email);
    if (this.user.email) {
      alert('veuillez consulter vos mail');
    }


  }
  backLogin(){
    this.router.navigate(['/login'])
  }
}
