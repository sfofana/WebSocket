import { Component } from '@angular/core';
import { ServerMessage } from './models/serverMessage';
import { SocketService } from './services/socket.service';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientMsgs: Array<string> = [];
  serverMessage: ServerMessage = {} as ServerMessage
  serverMsgs: Array<ServerMessage> = [];
  greeting: any;
  msg: string;

  constructor(private socket: SocketService, private memory: SubjectService) { }

  ngOnInit() {
    this.memory.sync.subscribe(data => {
      this.serverMessage = data;
      this.serverMsgs.push(data);
    });
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage() {
    this.clientMsgs.push(this.msg);
    this.socket.send(this.msg);
    this.reset();
  }

  reset() {
    this.msg = "";
  }

}
