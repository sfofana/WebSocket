import { Component } from '@angular/core';
import { ChatMessage } from './models/chatMessage';
import { ServerMessage } from './models/serverMessage';
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

  constructor(private socket: SocketService, private memory: SubjectService) { }

  ngOnInit() {
    this.memory.sync.subscribe(data => {
      this.serverMsg.composer = false;
      this.serverMsg.message = data.message;
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
    this.clientMsg.composer = true;
    this.msgs.push(this.clientMsg);
    this.socket.send(this.clientMsg.message);
    this.reset();
  }

  reset() {
    this.clientMsg = {} as ChatMessage;
  }

}
