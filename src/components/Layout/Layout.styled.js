import styled from "styled-components";
import { ReactComponent as ArrowUp } from "images/arrow-up.svg";
import { ReactComponent as ArrowDown } from "images/arrow-down.svg";

export const ArrowUpIcon = styled(ArrowUp)`
  width: 10px;
  height: 5px;
`;

export const ArrowDownIcon = styled(ArrowDown)`
  width: 10px;
  height: 5px;
`;
export const BtnCss = styled.button`
  width: 20px;
  height: 20px;
  border: transparent;
  background-color: inherit;
`;

export const TextMenuModel = styled.span`
  color: rgb(18, 20, 23);
  font-family: var(--primary-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  text-align: left;
  margin-right: 51px;
`;

export const TextMenuPrise = styled.span`
  color: rgb(18, 20, 23);
  font-family: var(--primary-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  text-align: left;
  margin-right: 11px;
`;

export const MainWrapCss = styled.div`
  position: fixed;
  top: 0;
  padding: 150px 290px 0 290px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 5;
  background-color: var(--primary-white);
`;

export const BoxGrid = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  margin-right: 18px; */
`;

export const BoxForFilterCss = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  justify-content: center; */
`;

export const TitleCss = styled.span`
  color: var(--secondary-color);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
`;

export const BoxDropMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: var(--secondary-grey);
`;

export const SearchBtnCss = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 44px 14px 44px;
  border-radius: 12px;
  background-color: var(--primary-blue);
  cursor: pointer;

  color: var(--primary-white);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;

  &:hover {
    background-color: var(--secondary-blue);
  }
`;
