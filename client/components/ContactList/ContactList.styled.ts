import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const List = styled.ul`
  max-width: 75%;
  margin: auto;
`;

export const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: calc(var(--gap) * 2);
  cursor: pointer;
`;

const Text = css`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-light);
`;

export const Name = styled.h3`
  ${Text}
  text-transform: capitalize;
`;

export const Email = styled.h4`
  ${Text}
`;

export const Age = styled.h4`
  ${Text}
`;
