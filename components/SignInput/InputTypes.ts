export type InputErrorMessageTypes = {
  loginEmail: string;
  loginPassword: string;
  validationEmail: string;
  PasswordRepeat: string;
  emailEmpty: string;
  passwordEmpty: string;
  correctInsert: string;
};

export type InputErrorMessageProps = keyof InputErrorMessageTypes;

export type InputTypes = "text" | "password";
