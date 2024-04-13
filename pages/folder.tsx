import { useEffect, useState } from "react";
import { FolderListDataForm } from "../types/DataForm";
import * as S from "../styles/pages/FolderStyled";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { getCategory } from "@data-access/getCategory";
import FolderHeader from "@components/folder/FolderHeader";
import { SearchBar } from "@components/common/SearchBar";
import { FolderContent } from "@components/folder/FolderContent/FolderContent";
import Footer from "@components/common/Footer";
import { ModalProvider } from "@components/common/RefactorModal/ModalProvider";

function Folder() {
  const [categoryData, setCategoryData] = useState<FolderListDataForm[]>([]);
  const { isVisible: isHeaderVisible, targetRef: headerRef } =
    useIntersectionObserver();
  const { isVisible: isFooterVisible, targetRef: footerRef } =
    useIntersectionObserver();

  const floatingState = !isHeaderVisible && !isFooterVisible ? true : false;

  const handleLoadCategory = async () => {
    const { data } = await getCategory();
    setCategoryData(data);
  };

  useEffect(() => {
    handleLoadCategory();
  }, []);

  return (
    <ModalProvider>
      <FolderHeader
        data={categoryData}
        ref={headerRef}
        isFloating={floatingState}
      />
      <S.ItemsContainer>
        <SearchBar />
        <FolderContent data={categoryData} />
      </S.ItemsContainer>
      <Footer ref={footerRef} />
    </ModalProvider>
  );
}

export default Folder;
