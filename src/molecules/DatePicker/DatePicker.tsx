import MonthGrid from '../../atoms/MonthGrid/MonthGrid';
import MonthPicker from '../../atoms/MonthPicker/MonthPicker';
import c from './DatePicker.module.css';

interface Props {
  year: number;
  month: number;
  day: number;
  onChange: (year: number, month: number, day: number) => void
}

function DatePicker(props: Props) {
  const { year, month, day, onChange } = props;
  return (
    <div className={c.DatePicker} >
      <div className={c.monthPicker}>
        <MonthPicker month={month} year={year} onChange={(year, month) => onChange(year, month, 1)} />
      </div>
      <MonthGrid month={month} year={year} day={day} onSelect={(d) => onChange(year, month, d)} />
    </div>
  );
}

export default DatePicker;
