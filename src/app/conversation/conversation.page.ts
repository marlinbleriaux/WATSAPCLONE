import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import user from '../../User';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


export interface User {
  uid: string;
  email: string;
}
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
//message
MesDiscussion=[]
sendSms:any;
idConvExist=false
// IdConversation=this.currentUser.uid+""+this.uid
IdConversation='';
public messages=[];




  //message recuperer
asset:"string";

  // messages = [];
  messageText: any;

  //navigation
  nom: any;
  image: any;
  email: any;
  uid: any;
  toggled: boolean = false;

  //mesasage implementation
  public icComp=localStorage.getItem("id")
  connected = false;
  // userId: any;
  idTchat = ""
  currentUser= localStorage.getItem("id");
  showEmojiPicker:boolean=false;

  constructor(private route: ActivatedRoute,
    private nav: NavController,
    public firestore: AngularFirestore,
    public firestorage: AngularFireStorage,
    public afAuth: AngularFireAuth,
    public router:Router
  ) {

    
    //NAV
    this.route.params.subscribe(info => {
      this.nom = info.nom,
        this.image = info.image,
        this.uid = info.uid,
        this.email = info.email

    })

    
    //etat de connexion
    this.afAuth.authState.subscribe(auth => {
      console.log(auth);
      if (!auth) {

        console.log('non connecter');

      } else {
        console.log('Utilisateur connete:' + auth.uid);
        this.connected = true;
        // this.getMessages();
        // this.getMessagess();


      }
      this.IdConversation=this.currentUser+""+this.uid
    });


  }


  ngOnInit() {
      //nav
    this.route.params.subscribe(info => {
      this.nom = info.nom,
        this.image = info.image,
        this.uid = info.uid,
        this.email = info.email

    })

    this.existe(localStorage.getItem("id")+""+this.uid)
  }



sendMessage() {
    this.sendSms=this.messageText
    const infosMessage  ={
      uidSend:this.currentUser,
      text: this.sendSms,
      date: new Date(),
      heure: `${new Date().getHours()}:${new Date().getMinutes()}`,
      assets: "",
    };
    this.messages.push(infosMessage);
    this.messageText="";

      this.firestore.collection(`chats/`).doc(this.IdConversation).collection(`message`).add({
        uidSend:this.currentUser,
        text: this.sendSms,
        date: new Date(),
        heure: `${new Date().getHours()}:${new Date().getMinutes()}`,
        assets: '',
      })
      
  }
  existe(id) {
    this.firestore.collection(`chats/`).doc(`tchatId`).collection(`tchatId`)
    .snapshotChanges(['added'])
    .subscribe(actions => {
      var trouve=false
      actions.forEach(action => {
        console.log(action.payload.doc.get('id'));
        console.log(id);
        
          if((id).localeCompare(action.payload.doc.get('id'))==0){
            trouve = true
          }
        })
        if(trouve==false) this.IdConversation=this.currentUser+""+this.uid;
        else{
          this.IdConversation=this.uid+""+this.currentUser;
        } 
        console.log(trouve);
        
        this.getMessage(this.IdConversation)
    });
    localStorage.setItem("tchatId",this.IdConversation)
  }

  getMessage(id) {
    localStorage.setItem("tchatId",id)
    this.firestore.doc(`chats/${id}`).collection(`message/`,ref =>ref.orderBy('date'))
    .snapshotChanges(['added'])
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
            this.messages.push({
              uidSend:action.payload.doc.get('uidSend'),
              nomSend: action.payload.doc.get('nomSend'),
              text: action.payload.doc.get('text'),
              date: action.payload.doc.get('date'),
              heure: action.payload.doc.get('heure'),
              assets: action.payload.doc.get('assets'),
              
            })
          
        })
      });
    
  }




  back(){
    this.router.navigate(['/tab3'])

  }
  addEmoji(event) {
     this.messageText=this.messageText+event.data;
     console.log(event);
     
       }
  
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

