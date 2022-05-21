import Link from "next/link";
import React, { useState } from "react";
import * as Styles from "./Header.styled";

const paths: {
  href: string;
  label: string;
}[] = [
  {
    href: "/",
    label: "contact",
  },
  {
    href: "/",
    label: "home",
  },
  {
    href: "/add-new-contact",
    label: "new",
  },
  {
    href: "/about",
    label: "about",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Styles.Header>
      <Styles.Nav>
        <Styles.Title>
          <Link href={paths[0].href}>
            <Styles.Anchor>{paths[0].label}</Styles.Anchor>
          </Link>
        </Styles.Title>

        <Styles.List>
          {paths.slice(1).map(({ href, label }) => (
            <Styles.ListItem key={href}>
              <Styles.Subtitle>
                <Link href={href}>
                  <Styles.Anchor>{label}</Styles.Anchor>
                </Link>
              </Styles.Subtitle>
            </Styles.ListItem>
          ))}
        </Styles.List>

        <Styles.Container
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Styles.Svg viewBox="0 0 24 24">
            <Styles.Path d="M 4 4 L 20 4" />
            <Styles.Path d="M 4 12 L 20 12" />
            <Styles.Path d="M 4 20 L 20 20" />
          </Styles.Svg>
        </Styles.Container>
        {isMenuOpen && (
          <Styles.ListTwo>
            {paths.slice(1).map(({ href, label }) => (
              <Styles.ListItem key={href}>
                <Styles.Subtitle>
                  <Link href={href}>
                    <Styles.Anchor>{label}</Styles.Anchor>
                  </Link>
                </Styles.Subtitle>
              </Styles.ListItem>
            ))}
          </Styles.ListTwo>
        )}
      </Styles.Nav>
    </Styles.Header>
  );
};

export default Header;
