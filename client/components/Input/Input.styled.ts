import { motion } from "framer-motion";
import styled from "styled-components";

export const Input = styled(motion.input)`
  background-color: transparent;
  border: none;
  outline: none;
  color: inherit;
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  border-color: var(--color);
  border-bottom: var(--border-height) solid;
`;
