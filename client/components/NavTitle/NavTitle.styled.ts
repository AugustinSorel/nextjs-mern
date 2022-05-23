import styled from "styled-components";
import { Anchor as AnchorPathItem } from "../PathItem/PathItem.styled";

export const Title = styled.h1`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bold);
  text-transform: capitalize;

  flex: 1;
`;

export const Anchor = styled(AnchorPathItem)``;
