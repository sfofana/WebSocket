import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../models/chatMessage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  chatMessage: ChatMessage = {} as ChatMessage;
  channel = new BehaviorSubject<ChatMessage>(this.chatMessage);

  constructor() { }

  public setChannel(message: ChatMessage) {
    this.channel.next(message);
  }

  public sync = this.channel.asObservable();

}
