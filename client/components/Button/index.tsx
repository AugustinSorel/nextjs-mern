import {
  brightBackground,
  scaleDown,
  scaleUp,
} from "../../framerMotion/whileVariants";
import theme from "../../styles/theme";
import * as Styles from "./Button.styled";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  text?: string;
  inverted?: boolean;
};

const Button = ({ children, text, inverted, ...rest }: Props) => {
  if (children) {
    return (
      <Styles.Button
        $inverted={inverted}
        whileFocus={{ color: theme.colors.brightColor }}
        {...rest}
      >
        {children}
      </Styles.Button>
    );
  }

  return (
    <Styles.Button
      whileHover={{ ...brightBackground, ...scaleUp }}
      whileTap={{ ...scaleDown }}
      whileFocus={{ ...brightBackground, ...scaleUp }}
      $inverted={inverted}
      {...rest}
    >
      {text}
    </Styles.Button>
  );
};

export default Button;
