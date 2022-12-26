import { arrayFrom, classNames, formatTime } from "../../$shared/utils";
import c from "./TimePicker.module.css";
import Text from "../Text/Text";

interface Props {
  hour: number;
  onChange: (hour: number) => void;
}

function TimePicker(props: Props) {
  const { hour, onChange } = props;
  return (
    <div className={c.TimePicker}>
      {arrayFrom(24).map((h) => (
        <div
          key={h}
          className={classNames(c.time, [c.selectedTime, hour === h])}
          onClick={() => onChange(h)}
        >
          <Text size="md">{formatTime(h)}</Text>
        </div>
      ))}
    </div>
  );
}

export default TimePicker;
