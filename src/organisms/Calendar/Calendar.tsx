import React from "react";
import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Text from "../../atoms/Text/Text";
import DateTimePicker from "../../molecules/DateTimePicker/DateTimePicker";
import c from "./Calendar.module.css";

interface Props {}

function Calendar(props: Props) {
  const today = new Date();
  const [day, setDay] = React.useState(today.getDate());
  const [month, setMonth] = React.useState(today.getMonth() + 1);
  const [year, setYear] = React.useState(today.getFullYear());
  const [hour, setHour] = React.useState(0);

  return (
    <Card>
      <div className={c.header}>
        <Text size="md" bold>
          Schedule Response
        </Text>
      </div>
      <DateTimePicker
        year={year}
        month={month}
        day={day}
        hour={hour}
        onChange={(y, m, d, h) => {
          setYear(y);
          setMonth(m);
          setDay(d);
          setHour(h);
        }}
      />
      <div className={c.footer}>
        <Button onClick={() => {}} color="primary">
          Schedule
        </Button>
        <Button onClick={() => {}} color="secondary">
          Cancel
        </Button>
      </div>
    </Card>
  );
}

export default Calendar;
