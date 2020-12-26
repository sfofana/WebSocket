import { ChatMessage } from '../models/chatMessage';
export class JsonUtil {

  public static jsonToServerMessage(json: string): ChatMessage {
    const obj = JSON.parse(json);
    return {
      message: obj.content,
      composer: false
    };
  }
}
