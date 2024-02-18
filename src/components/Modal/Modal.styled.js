import styled from "styled-components";
import { ReactComponent as Close } from "images/close.svg";

export const ModalCss = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContentCss = styled.div`
  /* pop up */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-white);
  width: 280px;
  padding: 40px 35px 40px;
  border-radius: 24px;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    /* width: 541px; */
  }
`;

export const BtnCss = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  top: 6px;
  right: 6px;
  z-index: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  width: 16px;
  height: 16px;
`;
export const ContainerCss = styled.div`
  width: 240px;
  margin-bottom: 13px;

  @media (max-width: 768px) {
    width: 461px;
  }
`;

export const ImgCss = styled.img`
  border-radius: 14px;
  width: 100%;
  max-width: 100%;
  height: auto;
`;
export const RentalCarBtn = styled.button`
  width: 168px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 50px 12px 50px;
  border-radius: 12px;
  background-color: var(--primary-blue);
  cursor: pointer;

  &:hower {
    background-color: var(--secondary-blue);
  }

  color: var(--primary-white);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
`;
