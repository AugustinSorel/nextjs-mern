import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Path from "../../types/Path";
import * as Styles from "./PathItem.styled";

type Props = {
  path: Path;
};

const PathItem = ({ path: { href, label } }: Props) => {
  const [isPathItemHovered, setIsPathHovered] = useState(false);
  const { pathname } = useRouter();
  const isPathItemSelected = pathname === href;

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
          <Styles.Anchor>{label}</Styles.Anchor>
        </Link>
      </Styles.Text>

      {isPathItemHovered && <Styles.Backdrop layoutId="backdrop" />}
      {isPathItemSelected && <Styles.Underline layoutId="underline" />}
    </Styles.ListItem>
  );
};

export default PathItem;