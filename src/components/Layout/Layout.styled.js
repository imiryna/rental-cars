import styled from "styled-components";

export const MainWrapCss = styled.div`
  position: fixed;
  top: 0;
  padding: 150px 290px 0 290px;
`;

export const BoxGrig = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  margin-right: 18px;
`;

export const BoxFoFiltrCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  justify-content: center;

  color: var(--secondary-color);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
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
