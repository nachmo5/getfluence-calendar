import { format } from "date-fns";
import { formatTime } from "../../$shared/utils";
import TimePicker from "../../atoms/TimePicker/TimePicker";
import DatePicker from "../DatePicker/DatePicker";
import LabeledTextInput from "../LabeledTextInput/LabeledTextInput";
import c from "./DateTimePicker.module.css";

interface Props {
  year: number;
  month: number;
  day: number;
  hour: number;
  onChange: (year: number, month: number, day: number, hour: number) => void;
}

function DateTimePicker(props: Props) {
  const { year, month, day, hour, onChange } = props;
  return (
    <div className={c.DateTimePicker}>
      <LabeledTextInput
        label="Date"
        value={format(new Date(year, month - 1, day), "dd/M/yyyy")}
        inputClass={c.dateInput}
        onChange={() => {
          // TODO
        }}
      />
      <LabeledTextInput
        label="Time"
        value={formatTime(hour)}
        inputClass={c.timeInput}
        onChange={() => {
          // TODO
        }}
      />
      <DatePicker
        day={day}
        month={month}
        year={year}
        onChange={(y, m, d) => onChange(y, m, d, hour)}
      />
      <TimePicker hour={hour} onChange={(h) => onChange(year, month, day, h)} />
    </div>
  );
}

export default DateTimePicker;
