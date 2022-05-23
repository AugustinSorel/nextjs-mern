import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "../../styles/devices";

export const Header = styled.header`
  padding: 0 var(--gap);
  border-bottom: var(--border-height) solid var(--color);

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Nav = styled.nav`
  display: contents;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: none;

  @media ${devices.mobile} {
    display: contents;
  }
`;

export const ListTwo = styled(motion.ul)`
  flex: 0 1 100%;
  text-align: center;
  display: none;
  overflow: hidden;

  @media ${devices.mobile} {
    display: block;
  }
`;
