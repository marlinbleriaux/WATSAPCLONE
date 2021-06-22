import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import firebase from 'firebase/app';


export interface User{
  username:string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 
   private user:User;
  constructor(public auth: AngularFireAuth, private afStorage: AngularFireStorage, private router: Router,) { }

  
   logeMen( value) {
     return new Promise<any> (( resolve, reject)=> {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
       .then( res=> resolve(res),
       error => reject(error)   
       
       )
       
       

     })

    }
    setUser(user:User){
      return this.user= user;
    }
     getUserId():string{
       return this.user.uid;
     }
       
  registr(value){
    return new Promise<any> (( resolve, reject)=> {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then( res=> resolve(res),
      error => reject(error)
      )
    })
   
  }
/*
  async logeMeI(value) {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password);
    console.log(value);
    if (value.value.email) {
      
      alert('login success ');
      
    } else {
      alert('login failed! ');
    }
  }*/

  }