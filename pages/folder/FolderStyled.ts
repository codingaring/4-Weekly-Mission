import styled from "styled-components";

export const FolderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-bottom: 6rem;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  row-gap: 3.2rem;
  padding: 0 3.2rem;
  margin-left: 50%;
  transform: translate(-50%, 0);

  @media (min-width: 768px) {
    row-gap: 2.5rem;
  }
`;
