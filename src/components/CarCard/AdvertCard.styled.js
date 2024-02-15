import styled from "styled-components";
import { ReactComponent as Heart } from "images/heart.svg";

export const HeartIcon = styled(Heart)`
  width: 16px;
  height: 13px;

  &:hover {
    fill: var(--primery-blue);
  }
  &:active {
    fill: var(--primery-blue);
  }
`;
export const BtnCss = styled.button`
  background-color: transparent;
`;

export const ContainerCss = styled.div`
  background-color: green;
`;
