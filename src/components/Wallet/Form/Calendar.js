import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker showTimeSelect timeFormat="p" dateFormat="Pp" timeIntervals={15} selected={startDate} onChange={(date:Date) => setStartDate(date)} />
  );
};