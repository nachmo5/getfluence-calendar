import { classNames } from "../../$shared/utils";
import c from "./TextInput.module.css";

export interface Props {
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  className?: string;
  type?: "text" | "password";
}

function TextInput(props: Props) {
  const { type = "text" } = props;
  return (
    <input
      type={type}
      className={classNames(c.TextInput, [
        props.className || "",
        !!props.className,
      ])}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
    />
  );
}

export default TextInput;
