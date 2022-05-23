import Link from "next/link";
import paths from "../../utils/paths";
import * as Styles from "./NavTitle.styled";

const NavTitle = () => {
  return (
    <Styles.Title>
      <Link href={paths[0].href} passHref>
        <Styles.Anchor>{paths[0].label}</Styles.Anchor>
      </Link>
    </Styles.Title>
  );
};

export default NavTitle;
