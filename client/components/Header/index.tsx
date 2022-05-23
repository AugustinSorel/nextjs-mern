import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Button from "../Button";
import MenuIcon from "../MenuIcon";
import NavTitle from "../NavTitle";
import PathsList from "../PathsList/PathsList";
import * as Styles from "./Header.styled";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Styles.Header>
      <Styles.Nav>
        <NavTitle />

        <Styles.List>
          <PathsList />
        </Styles.List>

        <Styles.ButtonContainer>
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon isMenuOpen={isMenuOpen} />
          </Button>
        </Styles.ButtonContainer>

        <AnimatePresence exitBeforeEnter>
          {isMenuOpen && (
            <Styles.ListTwo
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <PathsList />
            </Styles.ListTwo>
          )}
        </AnimatePresence>
      </Styles.Nav>
    </Styles.Header>
  );
};

export default Header;
