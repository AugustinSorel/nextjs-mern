import { HTMLInputTypeAttribute } from "react";
import theme from "../../styles/theme";
import * as Styles from "./Input.styled";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ ...rest }: Props) => {
  return (
    <Styles.Input
      whileFocus={{ color: theme.colors.brightColor }}
      autoComplete="no"
      {...rest}
    />
  );
};

export default Input;
