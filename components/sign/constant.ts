export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export const SIGN_TEXT_CONTENTS = {
  signin: {
    comment: "회원이 아니신가요?",
    linkText: "회원 가입하기",
    linkURL: "/signup",
    toSNS: "소셜 로그인",
  },
  signup: {
    comment: "회원이신가요?",
    linkText: "로그인 하기",
    linkURL: "/signin",
    toSNS: "소셜 회원가입하기",
  },
};

/** type */
export interface PageTypeProps {
  pageType: "signin" | "signup";
}
