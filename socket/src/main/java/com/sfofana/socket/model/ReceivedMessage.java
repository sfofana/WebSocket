package com.sfofana.socket.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReceivedMessage {

    private String message;
    private String email;
}
