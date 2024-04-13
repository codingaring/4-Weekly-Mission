import * as S from "./CategoryNavStyled";
import { CategoryNavButtons } from "./CategoryNavButtons/CategoryNavButtons";

interface Props {
  activeCategoryName: string;
  folderId: string;
}

export function CategoryNav({ activeCategoryName, folderId }: Props) {
  return (
    <S.CategoryNavBarContainer>
      <S.ActiveCategory>{activeCategoryName}</S.ActiveCategory>
      <S.CategoryNavButtons>
        {activeCategoryName !== "전체" && (
          <CategoryNavButtons
            selectFolder={activeCategoryName}
            folderId={folderId}
          />
        )}
      </S.CategoryNavButtons>
    </S.CategoryNavBarContainer>
  );
}
