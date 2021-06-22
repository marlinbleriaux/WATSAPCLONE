import { Injectable } from '@angular/core';


export interface ContactModel {
  contactName: string;
  contactAvatar: string;
  snippet: string;
  time: Date;
}
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: ContactModel[];
  user = {
    avatar:
    "assets/ui.jpg"
  };



  constructor() {
      // example: fetch data from API
      this.contacts = this.getData();
   }
   getData(): ContactModel[] {
    return [
      {
        contactName: "marlin",
        contactAvatar:
          "assets/ui.jpg",
        snippet: "Listen, I've had a pretty messed up day...",
        time: new Date(Date.now())
      },
      {
        contactName: "Han",
        contactAvatar:
           "assets/ui.jpg",
        snippet: "I've got enough on my plate as it is, and I...",
        time: new Date(Date.now())
      },
      {
        contactName: "Rey",
        contactAvatar:
          "assets/ui.jpg",
        snippet: "You will remove these restraints and leave...",
        time: new Date(Date.now())
      },
      {
        contactName: "Luke",
        contactAvatar:
          "assets/ui.jpg",
        snippet: "I feel the good in you, the conflict...",
        time: new Date(Date.now())
      }
    ];
  }
}
