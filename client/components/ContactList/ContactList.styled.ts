import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import devices from "../../styles/devices";

export const List = styled(motion.ul)`
  max-width: 75%;
  margin: auto;

  @media ${devices.mobile} {
    max-width: 100%;
    padding: var(--gap);
  }
`;
