import { scaleDown, scaleUp } from "../../framerMotion/whileVariants";
import useNavigationMenuStore from "../../store/useNavigationMenuStore";
import * as Styles from "./MenuIcon.styled";

const MenuIcon = () => {
  const { isNavigationMenuOpen } = useNavigationMenuStore();

  return (
    <Styles.Svg
      whileHover={{ ...scaleUp }}
      whileFocus={{ ...scaleUp }}
      whileTap={{ ...scaleDown }}
      viewBox="0 0 24 24"
    >
      <Styles.Path
        animate={{ d: isNavigationMenuOpen ? "M 2 22 L 22 2" : "M 2 2 L 22 2" }}
      />
      <Styles.Path
        d="M 2 12 L 22 12"
        animate={{ opacity: isNavigationMenuOpen ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      />
      <Styles.Path
        animate={{
          d: isNavigationMenuOpen ? "M 2 2 L 22 22" : "M 2 22 L 22 22",
        }}
      />
    </Styles.Svg>
  );
};

export default MenuIcon;
