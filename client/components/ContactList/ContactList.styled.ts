import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const List = styled(motion.ul)`
  max-width: 75%;
  margin: auto;
`;

export const ListItem = styled(motion.li)`
  margin-top: calc(var(--gap) * 2);
  list-style: none;
  cursor: pointer;
`;

export const Anchor = styled.a`
  color: inherit;
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
  }
`;

const Text = css`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-light);
`;

export const Name = styled.h4`
  ${Text}
  text-transform: capitalize;
  text-align: left;
`;

export const Email = styled.h5`
  ${Text}
  text-align: center;
`;

export const Age = styled.h5`
  ${Text}
  text-align: right;
`;
