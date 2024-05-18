import styled from "styled-components";

export const AddToFolderContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
`;
export const FolderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 20rem;
  overflow: hidden scroll;
`;

export const SelectFolder = styled.button<{ isSelect: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem;
  gap: 0.8rem;
  background-color: ${({ isSelect }) =>
    isSelect ? "var(--light-blue)" : "transparent"};
`;

export const SelectLink = styled.p`
  width: 30rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--gray60);
  font-size: 1.4rem;
  line-height: 2.2rem;
  text-align: center;
  margin: 0.5rem 0 2.5rem 0;
`;

export const FolderName = styled.p`
  color: var(--gray100);
  line-height: 2.4rem;
  font-size: 1.6rem;
`;

export const FolderCount = styled.span`
  font-size: 1.4rem;
  line-height: 1.671rem;
  color: var(--gray60);
`;

export const SelectFolderIcon = styled.div`
  display: none;
  width: 1.125rem;
  height: 0.95rem;
  background-image: url("../../../../public/images/check.svg");
  position: absolute;
  right: 5.5rem;
`;
