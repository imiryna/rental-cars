import styled from "styled-components";

export const ContainerMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8;
  padding: 14px 18px;

  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  overflow-y: scroll;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  background: rgb(255, 255, 255);
  background-color: var();
`;

export const MenuItemsCss = styled.li`
  color: rgba(18, 20, 23, 0.2);
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  text-align: left;
`;
