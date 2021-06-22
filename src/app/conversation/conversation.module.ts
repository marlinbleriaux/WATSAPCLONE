import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversationPageRoutingModule } from './conversation-routing.module';

import { ConversationPage } from './conversation.page';
import { Ionic4EmojiPickerModule } from 'ionic4-emoji-picker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  Ionic4EmojiPickerModule ,
    ConversationPageRoutingModule
  ],
  declarations: [ConversationPage]
})
export class ConversationPageModule {}
