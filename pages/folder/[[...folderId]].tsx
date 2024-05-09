import { useState } from "react";
import * as S from "../../styles/pages/FolderStyled";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { FolderListDataForm, getCategory } from "@data-access/getCategory";
import FolderHeader from "@components/folder/FolderHeader";
import { FolderContent } from "@components/folder/FolderContent/FolderContent";
import Footer from "@components/common/Footer";
import { ModalProvider } from "@components/common/RefactorModal/ModalProvider";
import { SearchBar } from "@components/common/SearchBar";
import { useEffectOnce } from "@hooks/useEffectOnce";

function Folder() {
  const [folderInfo, setFolderInfo] = useState<FolderListDataForm[]>([]);
  const { isVisible: isHeaderVisible, targetRef: headerRef } =
    useIntersectionObserver();
  const { isVisible: isFooterVisible, targetRef: footerRef } =
    useIntersectionObserver();

  const floatingState = !isHeaderVisible && !isFooterVisible ? true : false;

  const handleLoadCategory = async () => {
    const folderListInfo = await getCategory();
    setFolderInfo(folderListInfo);
  };

  useEffectOnce(handleLoadCategory);

  return (
    <ModalProvider>
      <FolderHeader
        folderInfo={folderInfo}
        ref={headerRef}
        isFloating={floatingState}
      />
      <S.ItemsContainer>
        <SearchBar />
        <FolderContent folderInfo={folderInfo} />
      </S.ItemsContainer>
      <Footer ref={footerRef} />
    </ModalProvider>
  );
}

export default Folder;
