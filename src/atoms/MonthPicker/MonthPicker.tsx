import { getMonthName } from "../../$shared/utils";
import c from './MonthPicker.module.css';
import Text from "../Text/Text";
import { addMonths } from "date-fns";

interface Props {
  month: number;
  year: number;
  onChange: (year: number, month: number) => void;
}

function MonthPicker(props: Props) {
  const { month, year, onChange } = props;
  const date = new Date(year, month - 1, 1)

  const changeDate = (step: number) => {
    const nextDate = addMonths(date, step)
    onChange(nextDate.getFullYear(), nextDate.getMonth() + 1)
  }

  return (
    <div className={c.MonthPicker} >
      <Text size="md" bold color="primary">
        {`${getMonthName(month)} ${year}`}
      </Text>
      <div className={c.caretContainer}>
        <div className={c.caret} onClick={() => changeDate(-1)}>  {"＜"}  </div>
        <div className={c.caret} onClick={() => changeDate(1)}>  {"＞"}  </div>
      </div>
    </div>
  );
}

export default MonthPicker;
