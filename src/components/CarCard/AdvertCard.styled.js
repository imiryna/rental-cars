import styled from "styled-components";
import { ReactComponent as Heart } from "images/heart.svg";
import { ReactComponent as HeartIco } from "images/heart1.svg";

export const WraperCss = styled.div`
  width: 276px;
  display: flex;
  flex-direction: column;
  background: #f3f3f2, linear-gradient(180deg, #121417 0%, rgba(18, 20, 23, 0) 100%);

  position: relative;
`;
export const ImgCss = styled.img`
  border-radius: 14px;
  width: 268px;
  height: 274px;
  margin-bottom: 14px;
`;

export const HeartIcon = styled(Heart)`
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    fill: var(--primary-blue);
    stroke: none;
  }
  &:active {
    fill: var(--primary-blue);
    stroke: none;
  }
`;

export const BlueHeartIcon = styled(HeartIco)`
  cursor: pointer;
  fill: var(--primary-blue);
  &:hover {
    fill: var(--primary-blue);
    stroke: none;
  }
  &:active {
    fill: var(--primary-blue);
    stroke: none;
  }
`;

export const BtnCss = styled.button`
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 13px;
`;

export const ContainerCss = styled.div``;
export const ModelWrapCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const GrigWrapCss = styled.div`
  color: var(--secondary-color);
  font-family: var(--primary-font);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr 1px;
  grid-auto-flow: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  /* display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  position: relative; */
`;

export const VerticalLine = styled.div`
  &::before {
    /* border: 1px solid rgba(18, 20, 23, 0.1); */
    border-left: 1px solid var(--secondary-color);
    height: 16px;
    /* position: absolute; */
    left: 2px;
    /* margin-left: -3px; */
    /* top: 0; */
  }
  /* &::after {
    /* border: 1px solid rgba(18, 20, 23, 0.1); */
  border-left: 4px solid var(--secondary-color);
  height: 16px;
  position: absolute;
  right: 1%;
  /* margin-left: -3px; */
  top: 0;
`;
export const ButtonCss = styled.button`
  width: 274px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 99px 12px 99px;
  margin-top: 24px;

  border-radius: 12px;
  cursor: pointer;
  background: var(--primary-blue);

  color: var(--primary-white);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  text-align: center;

  &:hover {
    background: var(--secondary-blue);
  }
`;
