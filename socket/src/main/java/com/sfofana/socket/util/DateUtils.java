package com.sfofana.socket.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {

    public static final String DATE = "MM/dd/yyyy";
    public static final String TIME = "hh:mm aa";
    public static final String TIMEDATE = "hh:mm aa MM/dd/yyyy";
    public static final String TIMESTAMP = "hh:mm:ss aa MM/dd/yyyy";

    public static String dateToString(Date date, String pattern) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
        return dateFormat.format(date);
    }
}
