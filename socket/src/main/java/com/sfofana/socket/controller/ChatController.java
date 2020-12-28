package com.sfofana.socket.controller;

import com.sfofana.socket.model.ReceivedMessage;
import com.sfofana.socket.transfer.SentMessage;
import com.sfofana.socket.util.DateUtils;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class ChatController {

    @MessageMapping("/message")
    @SendTo("/topic/channel")
    public SentMessage chat(@Payload ReceivedMessage receivedMessage) {
        return new SentMessage(receivedMessage.getMessage(), receivedMessage.getEmail(), DateUtils.dateToString(new Date(), DateUtils.TIMEDATE));
    }
}
