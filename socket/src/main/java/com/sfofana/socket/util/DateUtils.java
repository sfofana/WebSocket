package com.sfofana.socket.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {

    public static String dateToString(Date date) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("hh:mm aa MM/dd/yyyy");
        return dateFormat.format(date);
    }
}
