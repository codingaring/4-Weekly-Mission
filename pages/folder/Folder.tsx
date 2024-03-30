import * as S from "./FolderStyled";
import { FolderContent } from "./components/FolderContent/FolderContent";
import { useEffect, useRef, useState } from "react";
import { FolderListDataForm } from "../../types/DataForm";
import { getCategory } from "@data-access/getCategory";
import { SearchBar } from "@components/SearchBar";
import FolderHeader from "./components/FolderHeader/FolderHeader";
import Footer from "@components/Footer";
import { AddLinkBar } from "@pages/shared/components/AddLinkBar/AddLinkBar";

export default function Folder() {
  const [categoryData, setCategoryData] = useState<FolderListDataForm[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const HeaderObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    });

    HeaderObserver.observe(headerRef.current as Element);

    const FooterObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    });

    FooterObserver.observe(footerRef.current as Element);
  }, []);
  const flotingState = !isHeaderVisible && !isFooterVisible ? true : false;

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
        isFloting={flotingState}
      />
      <S.ItemsContainer>
        <SearchBar />
        <FolderContent data={categoryData} />
      </S.ItemsContainer>
      <Footer ref={footerRef} />
    </>
  );
}
