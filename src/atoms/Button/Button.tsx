import { classNames } from "../../$shared/utils";
import c from "./Button.module.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  color: "primary" | "secondary" | "rainbow";
  fullWidth?: boolean;
}

function Button(props: Props) {
  return (
    <div
      className={classNames(c.Button, c[props.color], [
        c.fullWidth,
        !!props.fullWidth,
      ])}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Button;
