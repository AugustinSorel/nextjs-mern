import {
  brightBackground,
  brightColor,
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
  color?: string;
};

const Button = ({ children, text, inverted, ...rest }: Props) => {
  const getBright = () => {
    if (inverted) {
      return brightBackground;
    }

    return brightColor;
  };

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
      whileHover={{ ...getBright(), ...scaleUp }}
      whileTap={{ ...scaleDown }}
      whileFocus={{ ...getBright(), ...scaleUp }}
      $inverted={inverted}
      {...rest}
    >
      {text}
    </Styles.Button>
  );
};

export default Button;
