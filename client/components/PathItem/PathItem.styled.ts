import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "../../styles/devices";

export const ListItem = styled.li`
  list-style: none;
  padding: var(--gap);
  position: relative;
`;

type TextProps = {
  isSelected: boolean;
};

export const Text = styled.h2<TextProps>`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  text-transform: capitalize;

  color: ${({ isSelected }) =>
    isSelected ? "var(--bright-color)" : "var(--color)"};
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const Backdrop = styled(motion.div)`
  position: absolute;
  inset: 0;

  background-color: var(--bright-background-color);
  z-index: -1;
  border-radius: var(--border-radius);

  @media ${devices.mobile} {
    display: none;
  }
`;

export const Underline = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: calc(-1 * var(--border-height));
  height: var(--border-height);
  width: 100%;
  background-color: var(--bright-color);

  @media ${devices.mobile} {
    display: none;
  }
`;
