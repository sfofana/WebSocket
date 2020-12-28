import { Component } from '@angular/core';
import { ChatMessage } from './models/chatMessage';
import { SocketService } from './services/socket.service';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientMsg: ChatMessage = {} as ChatMessage
  serverMsg: ChatMessage = {} as ChatMessage;
  msgs: Array<ChatMessage> = [];
  email: string;
  clientFormat: string = "dialog w3-row-padding w3-card w3-left w3-grey";
  serverFormat: string = "dialog w3-row-padding w3-card w3-right w3-blue";

  constructor(private socket: SocketService, private memory: SubjectService) { }

  ngOnInit() {
    this.memory.sync.subscribe(data => {
      if (data.email === this.email)
        data.format = this.clientFormat;
      else
        data.format = this.serverFormat;
      this.msgs.push(data);
    });
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage() {
    this.clientMsg.email = this.email;
    this.socket.send(this.clientMsg);
    this.reset();
  }

  reset() {
    this.clientMsg = {} as ChatMessage;
  }

}
