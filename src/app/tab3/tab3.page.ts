import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 

  //navigation
  nom: any;
  image: any;
  email: any;
  uid: any;
  public tab = [];
  public TabUserDiscuss=[];
  currentUser='';
  constructor(private nav:NavController,private route: ActivatedRoute,
    private router:Router,
    public firestore:AngularFirestore,
    public firestorage:AngularFireStorage,
    public contactsService: ContactsService,
    public afAuth: AngularFireAuth,
    ) { 
      this.afAuth.onAuthStateChanged((user) => {
        this.currentUser = user.uid;
      });
      
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
    
      // //recuperer les infos des utilisateurs
      //  this.users =firestore.collection('users').valueChanges();
      //    console.log(this.users);
         
        //NAV
    this.route.params.subscribe(info => {
      this.nom = info.nom,
        this.image = info.image,
        this.uid = info.uid,
        this.email = info.email

    })
      
}
GoToConv( user ){
  this.router.navigate(['/conversation',user]);
}
  
  discutP(){

    this.router.navigate(['discution-principale'])
  }
}
