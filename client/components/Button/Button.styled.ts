import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  $inverted?: boolean;
}

export const Button = styled(motion.button)<Props>`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;

  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-medium);
  text-transform: capitalize;
  color: inherit;
  padding: 1rem;
  border-radius: var(--border-radius);

  display: flex;
  justify-content: center;

  background-color: ${({ $inverted }) =>
    $inverted ? "var(--color)" : "transparent"};

  color: ${({ $inverted }) =>
    $inverted ? "var(--background-color)" : "inherit"};
`;
