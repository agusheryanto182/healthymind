export interface RegisterFormData {
  name: string;
  nim: string;
  prodi: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}
