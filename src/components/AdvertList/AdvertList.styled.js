import styled from "styled-components";

export const MainWrapCss = styled.div`
  padding: 170px 20px 40px;
  display: grid;
  grid-template-columns: 276px;
  gap: 29px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 276px);
    gap: 50px 29px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 276px);
    padding: 274px 128px 150px;
  }
`;

export const BoxListCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 29px, 50px;
  }
`;

export const LoadMoreBtn = styled.button`
  margin-left: 563px;
  margin-right: 680px;
  background-color: inherit;
  border: transparent;
  width: 79px;

  color: var(--primary-blue);
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  text-align: left;
  text-decoration-line: underline;
`;
