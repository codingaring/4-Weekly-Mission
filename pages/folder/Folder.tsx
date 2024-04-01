import * as S from "./FolderStyled";
import { FolderContent } from "./components/FolderContent/FolderContent";
import { useEffect, useState } from "react";
import { FolderListDataForm } from "../../types/DataForm";
import { getCategory } from "@data-access/getCategory";
import { SearchBar } from "@components/SearchBar";
import FolderHeader from "./components/FolderHeader/FolderHeader";
import Footer from "@components/Footer";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

export default function Folder() {
  const [categoryData, setCategoryData] = useState<FolderListDataForm[]>([]);
  const { isVisible: isHeaderVisible, targetRef: headerRef } =
    useIntersectionObserver();
  const { isVisible: isFooterVisible, targetRef: footerRef } =
    useIntersectionObserver();

  const floatingState = !isHeaderVisible && !isFooterVisible ? true : false;

  const handleLoadCategory = async () => {
    const { data } = await getCategory<{ data: FolderListDataForm[] }>();
    setCategoryData(data);
  };

  useEffect(() => {
    handleLoadCategory();
  }, []);

  return (
    <>
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
    </>
  );
}
