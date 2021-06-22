
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { AngularFireStorage } from '@angular/fire/storage';
import user from '../../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,

    public ngFireAuth: AngularFireAuth,
    private fb: FormBuilder,
    private authservice: AuthentificationService,private Storage: AngularFireStorage,private nav:NavController,private firestore : AngularFirestore)
     {
       this.ngFireAuth.onAuthStateChanged((user) => {
      localStorage.setItem("id",user.uid)
    });
   
  }

  ngOnInit() {
    this.validationFormUser = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }
  validationUserMessage = {
    email: [
      { type: "required", message: "Please enter your Email" },
      { type: "pattern", message: "the email is not correct" }
    ],
    password: [
      { type: "required", message: "Please enter your password" },
      { type: "pattern", message: "the password must be at least 5characters or more " }
    ]
  }

  validationFormUser: FormGroup;



  async logeMeI(value) {

    try {
      this.authservice.logeMen(value).then(resp => {
        console.log(resp);
        
        
        if (resp.user.email) {
         

         this.router.navigate(['/tabs/tab3'])
          alert('login success ');

       } else {
          alert('login failed! ');

        }

      })
    }
    catch (err) {
      console.log(err);
    }
    
    
  }


  inscription() {
    this.router.navigate(['/create-compte'])
  }
  forgetP() {
    this.router.navigate(['/reset-password'])
  }

}
