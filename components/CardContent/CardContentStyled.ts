import styled from "styled-components";

export const CardContentContainer = styled.div<{ isHovered: boolean }>`
  height: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.3s ease-in-out;

  ${({ isHovered }) =>
    isHovered ? " background-color: var(--light-blue)" : ""}
`;

export const ElapsedTime = styled.span`
  font-size: 1.3rem;
  color: var(--text-content-gray);
`;

export const Description = styled.p`
  height: 4.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  line-height: 150%;
`;

export const CreatedAtText = styled.span`
  font-size: 1.4rem;
  color: var(--text-content-black);
`;
