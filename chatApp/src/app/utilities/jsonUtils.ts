import { ChatMessage } from '../models/chatMessage';
export class JsonUtils {

  public static jsonToServerMessage(json: string): ChatMessage {
    const obj = JSON.parse(json);
    return {
      message: obj.content,
      email: obj.userName,
      timeStamp: obj.timeStamp,
      format: ""
    };
  }
}
