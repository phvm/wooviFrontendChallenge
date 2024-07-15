export interface PaymentOption {
  amount: number;
  refound: number;
  installments: number;
}

export interface UserInfo {
  name: string;
  cpf: string;
}

export interface APIResponse {
  userInfo: UserInfo;
  paymentOptions: {
    pixOption: PaymentOption;
    installmentOptions: PaymentOption[];
  };
}
