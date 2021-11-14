import React from 'react';
import Date from "./Date";

const DateList = (props) => {
  return (
    <div>
      {props.dates.map((date) => <Date date={date.getDate()} day={date.getDay()} />)}
    </div>
  );
};

export default DateList;