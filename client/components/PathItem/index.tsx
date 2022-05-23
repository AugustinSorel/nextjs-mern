import Link from "next/link";
import React, { useState } from "react";
import Path from "../../types/Path";
import * as Styles from "./PathItem.styled";

type Props = {
  path: Path;
};

const PathItem = ({ path: { href, label } }: Props) => {
  const [isPathItemHovered, setIsPathHovered] = useState(false);

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
      <Styles.Text>
        <Link href={href} passHref>
          <Styles.Anchor>{label}</Styles.Anchor>
        </Link>

        {isPathItemHovered && <Styles.Backdrop layoutId="backdrop" />}
      </Styles.Text>
    </Styles.ListItem>
  );
};

export default PathItem;
