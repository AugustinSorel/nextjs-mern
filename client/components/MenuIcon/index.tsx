import * as Styles from "./MenuIcon.styled";

type Props = {
  isMenuOpen: boolean;
};

const MenuIcon = ({ isMenuOpen }: Props) => {
  return (
    <Styles.Svg viewBox="0 0 24 24">
      <Styles.Path
        animate={{ d: isMenuOpen ? "M 4 20 L 20 4" : "M 4 4 L 20 4" }}
      />
      <Styles.Path
        d="M 4 12 L 20 12"
        animate={{ opacity: isMenuOpen ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      />
      <Styles.Path
        animate={{ d: isMenuOpen ? "M 4 4 L 20 20" : "M 4 20 L 20 20" }}
      />
    </Styles.Svg>
  );
};

export default MenuIcon;
