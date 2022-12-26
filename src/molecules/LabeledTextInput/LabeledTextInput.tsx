import TextInput, {
  Props as TextInputProps,
} from "../../atoms/TextInput/TextInput";
import c from "./LabeledTextInput.module.css";
import Text from "../../atoms/Text/Text";
import { classNames } from "../../$shared/utils";

interface Props extends TextInputProps {
  label: string;
  inputClass?: string;
  multiline?: boolean;
}

function LabeledTextInput(props: Props) {
  const { label, multiline = false, ...rest } = props;
  return (
    <div className={classNames(c.LabeledTextInput, [c.multiline, multiline])}>
      <Text classes={[c.label]} size="sm">
        {props.label}
      </Text>
      <TextInput {...rest} className={props.inputClass} />
    </div>
  );
}

export default LabeledTextInput;
