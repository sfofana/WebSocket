import { Component } from '@angular/core';
import { WebSocketAPI } from './configurations/webSocketAPI';
import { ServerMessage } from './models/serverMessage';
import { JsonUtil } from './utilities/jsonUtil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  webSocketAPI: WebSocketAPI;
  serverMessage: ServerMessage = {} as ServerMessage
  greeting: any;
  name: string;

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  connect(){
    this.webSocketAPI.connect();
  }

  disconnect(){
    this.webSocketAPI.disconnect();
  }

  sendMessage(){
    this.webSocketAPI.send(this.name);
  }

  handleMessage(message){
    this.serverMessage = JsonUtil.jsonToServerMessage(message);
    console.log(`content === ${this.serverMessage.content}`)
  }
}
