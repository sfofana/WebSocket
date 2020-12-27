package com.sfofana.socket.transfer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SentMessage {

    private String content;
    private String userName;
    private String timeStamp;
}
