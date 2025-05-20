// Todo : To secure user type
export type userTypes = {
  email: string;
  password?: string;
  token?:string
};


// Todo : Reset-Password Types
export type ResetPasswordTypes = {
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordType = {
  email: string;
};
