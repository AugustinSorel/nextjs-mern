import { motion } from "framer-motion";
import styled from "styled-components";

export const Svg = styled.svg`
  width: 25px;
`;

export const Path = styled(motion.path)`
  stroke-width: 2;
  stroke: var(--color);
  stroke-linecap: round;
`;
