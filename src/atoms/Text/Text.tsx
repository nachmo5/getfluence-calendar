import { classNames } from '../../$shared/utils';
import c from './Text.module.css';

interface Props {
  children: string | number;
  size: "xl" | "l" | "md" | "sm" | "xs";
  bold?: boolean;
  classes?: (string | [string, boolean])[]
  color?: "primary" | "secondary"
}




function Text(props: Props) {
  const { children, size, bold = false, classes = [], color = "secondary" } = props;
  return (
    <span className={classNames(c.Text, c[color], c[size], [c.bold, bold], ...classes)} >
      {children}
    </span>
  );
}

export default Text;
