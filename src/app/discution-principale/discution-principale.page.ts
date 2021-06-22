import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import user from '../../User';
import { AuthentificationService } from '../services/authentification.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

export interface User {
  uid: string;
  email: string;
}
@Component({
  selector: 'app-discution-principale',
  templateUrl: './discution-principale.page.html',
  styleUrls: ['./discution-principale.page.scss'],
})
export class DiscutionPrincipalePage implements OnInit {
   //azer:any[];
  // users : [];
public tab = [];
public TabUserDiscuss=[];
filteredusers = [];
 temparr = [];
 filterTerm: string;
 currentUser ='';

  constructor(private authservice :AuthentificationService,public router:Router,
    public firestore:AngularFirestore,
    public firestorage:AngularFireStorage,
    public navCtrl:NavController,
    public afAuth: AngularFireAuth,
    ) { 
      this.afAuth.onAuthStateChanged((user) => {
        this.currentUser = user.uid;
      });


    // this.onGetContries();
    
    // this.users =firestore.collection('users').valueChanges()
   

//recuperer les champs dans firebase

    this.firestore.collection('users/').get().subscribe(images => {
      this.tab=[]
      images.docs.forEach((doc)=>{
        this.TabUserDiscuss.push(doc.data());
      })
      console.log(this.TabUserDiscuss);
      
      this.TabUserDiscuss.map((element)=>{
        const refImage = this.firestorage.ref(element.photo)
        refImage.getDownloadURL().subscribe(imgUrl => {
         
          
          if (element.uid != this.currentUser ){
              const contact={
                nom: element.name,
                email: element.email,
                image:imgUrl,
                uid:element.uid

              }
            this.tab.push(contact)
           
            
           }

        });
      })
      this.TabUserDiscuss=this.tab
      console.log(this.TabUserDiscuss);
      
    });
    

}
GoToConv( user ){



  this.firestore.collection(`chats/`).doc(`tchatId`).collection(`tchatId`)
  .get()
  .subscribe(actions => {
    var trouve=false
    var tab=[]
    console.log("azerty");
    
    actions.docs.forEach(action => {
      tab.push(action.data())
    })
    tab.map(element=>{
      if((this.currentUser+""+user.uid).localeCompare(element.id)==0 || 
        ((element.id)).localeCompare(user.uid+""+this.currentUser)==0){
          trouve = true
        }
    })
    
    
        
      if(trouve==false){
        console.log("ok");
        
        this.firestore.collection(`chats/`).doc(`tchatId`).collection(`tchatId`).add({
          id: this.currentUser+user.uid
        })
      }
      
    });
    localStorage.setItem("id",this.currentUser)
  localStorage.setItem("monContactId",user.id)
  this.router.navigate(['/conversation',user]);

}




  ngOnInit() {

    
  
  }

}
