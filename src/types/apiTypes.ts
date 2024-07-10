interface InstallmentOption {
  installments: number;
  installmentValue: number;
  totalAmount: number;
  discount: number;
}

interface PixOption {
  installments: number;
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
