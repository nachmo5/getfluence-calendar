import { classNames, getMonthDays } from '../../$shared/utils';
import Text from '../Text/Text';
import c from './MonthGrid.module.css';

interface Props {
  day?: number; // 1 - 31
  month: number; // 1 - 12
  year: number;
  onSelect: (day: number) => void
}

const weekDays = [
  "S",
  "M",
  "T",
  "W",
  "T",
  "F",
  "S",
]

function MonthGrid(props: Props) {
  const { day, month, year, onSelect } = props;
  const days = getMonthDays(year, month)
  // Last month last days
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastMonthAllDays = getMonthDays(year, month - 1)
  const lastMonthLastDays = lastMonthAllDays.slice(lastMonthAllDays.length - firstDay, lastMonthAllDays.length)

  return (
    <div className={c.MonthGrid} >
      {
        weekDays.map((weekDay, wix) => <div className={classNames(c.cell, c.header)} key={weekDay + wix}>
          <Text size="sm">
            {weekDay}
          </Text>
        </div>)
      }
      {
        lastMonthLastDays.map(d => <div className={classNames(c.cell, c.lastMonth)} key={"l" + d}>
          <Text size="md">
            {d}
          </Text></div>)
      }
      {
        days.map(d =>
          <div
            onClick={() => onSelect(d)}
            className={classNames(c.cell, [c.selected, d === day])}
            key={"m" + d}>
            <Text size="md">
              {d}
            </Text>
          </div>)
      }
    </div>
  );
}

export default MonthGrid;
