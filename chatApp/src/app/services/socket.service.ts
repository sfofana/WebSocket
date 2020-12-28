import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../../environments/environment';
import { SubjectService } from './subject.service';
import { Injectable } from '@angular/core';
import { JsonUtils } from '../utilities/jsonUtils';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private memory: SubjectService) { }

  topic: string = environment.topic;
  stompClient: any;

  public connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(environment.socketUrl);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
        _this.memory.setChannel(JsonUtils.jsonToServerMessage(sdkEvent.body));
      });
    }, this.errorCallBack);
  };

  public disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this.connect();
    }, 5000);
  }

  /**
   * Send object to sever via web socket
   * @param object
   */
  public send(object) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/message", {}, JSON.stringify(object));
  }

}

