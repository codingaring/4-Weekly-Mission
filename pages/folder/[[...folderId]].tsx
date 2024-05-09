import { useEffect, useState } from "react";
import * as S from "../../styles/pages/FolderStyled";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { FolderListDataForm, getCategory } from "@data-access/getCategory";
import FolderHeader from "@components/folder/FolderHeader";
import { FolderContent } from "@components/folder/FolderContent/FolderContent";
import Footer from "@components/common/Footer";
import { SearchBar } from "@components/common/SearchBar";
import { useQuery } from "@tanstack/react-query";

function Folder() {
  const [folderInfo, setFolderInfo] = useState<FolderListDataForm[]>([]);
  const { isVisible: isHeaderVisible, targetRef: headerRef } =
    useIntersectionObserver();
  const { isVisible: isFooterVisible, targetRef: footerRef } =
    useIntersectionObserver();
  const { data } = useQuery({
    queryKey: ["folders"],
    queryFn: getCategory,
  });

  const floatingState = !isHeaderVisible && !isFooterVisible ? true : false;

  const handleLoadCategory = async () => {
    if (data && data.data) {
      setFolderInfo(data.data);
    }
  };

  useEffect(() => {
    handleLoadCategory();
  }, [data]);

  return (
    <>
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
    </>
  );
}

export default Folder;
