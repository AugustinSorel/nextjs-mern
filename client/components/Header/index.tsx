import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import useNavigationMenuStore from "../../store/useNavigationMenuStore";
import Button from "../Button";
import MenuIcon from "../MenuIcon";
import NavTitle from "../NavTitle";
import PathsList from "../PathsList/PathsList";
import * as Styles from "./Header.styled";

const Header = () => {
  const { toggleNavigationMenu, isNavigationMenuOpen } =
    useNavigationMenuStore();
  return (
    <Styles.Header>
      <Styles.Nav>
        <NavTitle />

        <Styles.List>
          <PathsList />
        </Styles.List>

        <Styles.ButtonContainer>
          <Button onClick={toggleNavigationMenu}>
            <MenuIcon />
          </Button>
        </Styles.ButtonContainer>

        <AnimatePresence exitBeforeEnter>
          {isNavigationMenuOpen && (
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
