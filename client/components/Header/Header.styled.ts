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

export const Title = styled.h1`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bold);
  text-transform: capitalize;

  flex: 1;
`;

export const Subtitle = styled.h2`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  text-transform: capitalize;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    display: none;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: var(--gap);
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const Container = styled.button`
  display: none;
  cursor: pointer;

  @media ${devices.mobile} {
    display: contents;
  }
`;

export const Svg = styled.svg`
  width: 25px;
`;

export const Path = styled.path`
  stroke-width: 2;
  stroke: var(--color);
  stroke-linecap: round;
`;

export const ListTwo = styled.ul`
  flex: 0 1 100%;
  text-align: center;
  display: none;

  @media ${devices.mobile} {
    display: block;
  }
`;
