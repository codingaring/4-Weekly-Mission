import { forwardRef, useEffect, useState } from "react";
import { useGetUser as getUser } from "@data-access/useGetUser";
import { FolderListDataForm } from "../../../types/DataForm";
import { DEFAULT_IMAGE } from "@components/common/CardImage/constant";
import { NavigationBar } from "@components/common/NavigationBar";
import { AddLinkBar } from "@components/shared/AddLinkBar/AddLinkBar";
import * as S from "./FolderHeaderStyled";

const FolderHeader = forwardRef(
  (
    { data, isFloating }: { data: FolderListDataForm[]; isFloating: boolean },
    ref
  ) => {
    const [userInfo, setUserInfo] = useState({
      email: "",
      imageSource: DEFAULT_IMAGE,
    });

    const handleLoadUser = async () => {
      const { data } = await getUser();
      const { email, image_source } = data[0] || {};
      setUserInfo({
        email,
        imageSource: image_source,
      });
    };

    useEffect(() => {
      handleLoadUser();
    }, []);

    return (
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        <S.FolderHeaderContainer>
          <NavigationBar></NavigationBar>
          <AddLinkBar data={data} isFloating={isFloating} />
        </S.FolderHeaderContainer>
      </div>
    );
  }
);

FolderHeader.displayName = "FolderHeader";

export default FolderHeader;
