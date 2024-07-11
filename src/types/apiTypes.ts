export interface InstallmentOption {
  installments: string;
  installmentValue: number;
  totalAmount: number;
  discount: number;
}

interface PixOption {
  installments: string;
  installmentValue: number;
  cashbackAmount: number;
  cashbackPercentage: number;
}

interface UserInfo {
  name: string;
}

export interface APIResponse {
  userInfo: UserInfo;
  paymentOptions: {
    pixOption: PixOption;
    installmentOptions: InstallmentOption[];
  };
}
