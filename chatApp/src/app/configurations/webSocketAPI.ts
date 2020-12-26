import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { AppComponent } from '../app.component';

export class WebSocketAPI {
  webSocketEndPoint: string = 'http://localhost:9000/api/v1/socket';
  topic: string = "/topic/channel";
  stompClient: any;
  appComponent: AppComponent;
  constructor(appComponent: AppComponent) {
    this.appComponent = appComponent;
  }

  public connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
        _this.onMessageReceived(sdkEvent);
      });
      //_this.stompClient.reconnect_delay = 2000;
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
   * Send message to sever via web socket
   * @param {*} message
   */
  public send(message) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/message", {}, JSON.stringify(message));
  }

  public onMessageReceived(message) {
    console.log("Message Recieved from Server :: " + message);
    this.appComponent.handleMessage(message.body);
  }
}
