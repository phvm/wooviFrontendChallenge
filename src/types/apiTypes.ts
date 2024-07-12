export interface InstallmentOption {
  installments: string;
  installmentValue: number;
  totalAmount: number;
  discount: number;
}

export interface PixOption {
  installments: string;
  installmentValue: number;
  cashbackAmount: number;
  cashbackPercentage: number;
}

export interface UserInfo {
  name: string;
}

export interface APIResponse {
  userInfo: UserInfo;
  paymentOptions: {
    pixOption: PixOption;
    installmentOptions: InstallmentOption[];
  };
}
