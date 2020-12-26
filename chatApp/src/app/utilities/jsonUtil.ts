import { ServerMessage } from '../models/serverMessage';
export class JsonUtil {

  public static jsonToServerMessage(json: string): ServerMessage {
    const obj = JSON.parse(json);
    return { content: obj.content };
  }
}
