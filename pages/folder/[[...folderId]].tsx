import * as S from "../../styles/pages/FolderStyled";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import FolderHeader from "@components/folder/FolderHeader";
import { FolderContent } from "@components/folder/FolderContent/FolderContent";
import Footer from "@components/common/Footer";
import { SearchBar } from "@components/common/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@data-access/getCategory";

function Folder() {
  const { isVisible: isHeaderVisible, targetRef: headerRef } =
    useIntersectionObserver();
  const { isVisible: isFooterVisible, targetRef: footerRef } =
    useIntersectionObserver();
  const { data } = useQuery({
    queryKey: ["folderList"],
    queryFn: getCategory,
  });

  const floatingState = !isHeaderVisible && !isFooterVisible ? true : false;

  return (
    <>
      <FolderHeader
        folderInfo={data}
        ref={headerRef}
        isFloating={floatingState}
      />
      <S.ItemsContainer>
        <SearchBar />
        <FolderContent folderInfo={data} />
      </S.ItemsContainer>
      <Footer ref={footerRef} />
    </>
  );
}

export default Folder;
