export interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  pocket?: 'A' | 'B';
  budget?: string;
  message?: string;
  createdAt?: Date;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  data?: RegistrationData & { _id: string };
  error?: string;
}
