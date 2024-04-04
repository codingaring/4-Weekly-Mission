import { PropsWithChildren } from "react";
import * as S from "@styles/common/PrimaryButton";

export const Cta = ({ children }: PropsWithChildren) => {
  return <S.PrimaryButton>{children}</S.PrimaryButton>;
};
