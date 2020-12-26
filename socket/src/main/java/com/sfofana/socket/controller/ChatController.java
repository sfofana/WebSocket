package com.sfofana.socket.controller;

import com.sfofana.socket.model.ReceivedMessage;
import com.sfofana.socket.transfer.SentMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
public class ChatController {

    @MessageMapping("/message")
    @SendTo("/topic/channel")
    public SentMessage chat(ReceivedMessage receivedMessage) {
        return new SentMessage(String.format("and returning message %s", receivedMessage.getMessage()));
    }
}
