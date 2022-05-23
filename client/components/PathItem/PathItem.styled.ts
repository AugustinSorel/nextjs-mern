import { motion } from "framer-motion";
import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  padding: var(--gap);
  position: relative;
`;

export const Text = styled.h2`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  text-transform: capitalize;
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const Backdrop = styled(motion.div)`
  position: absolute;
  inset: 0;

  background-color: #252525;
  z-index: -1;
  border-radius: 16px;
`;
