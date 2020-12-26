import { BehaviorSubject } from 'rxjs';
import { ServerMessage } from '../models/serverMessage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  serverMessage: ServerMessage = {} as ServerMessage;
  channel = new BehaviorSubject<ServerMessage>(this.serverMessage);

  constructor() { }

  public setChannel(message: ServerMessage) {
    this.channel.next(message);
  }

  public sync = this.channel.asObservable();

}
