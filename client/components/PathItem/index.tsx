import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useNavigationMenuStore from "../../store/useNavigationMenuStore";
import Path from "../../types/Path";
import * as Styles from "./PathItem.styled";

type Props = {
  path: Path;
};

const PathItem = ({ path: { href, label } }: Props) => {
  const [isPathItemHovered, setIsPathHovered] = useState(false);
  const { pathname } = useRouter();
  const isPathItemSelected = pathname === href;
  const { closeNavigationMenu } = useNavigationMenuStore();

  const mouseEnterHandler = () => {
    setIsPathHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsPathHovered(false);
  };

  return (
    <Styles.ListItem
      key={href}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Styles.Text isSelected={isPathItemSelected}>
        <Link href={href} passHref>
          <Styles.Anchor onClick={closeNavigationMenu}>{label}</Styles.Anchor>
        </Link>
      </Styles.Text>

      {isPathItemHovered && <Styles.Backdrop layoutId="backdrop" />}
    </Styles.ListItem>
  );
};

export default PathItem;
