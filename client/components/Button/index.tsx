import * as Styles from "./Button.styled";

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, ...rest }: Props) => {
  if (children) {
    return <Styles.Button {...rest}>{children}</Styles.Button>;
  }

  return <Styles.Button {...rest}>hello qworld</Styles.Button>;
};

export default Button;
