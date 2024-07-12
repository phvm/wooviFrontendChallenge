import { APIResponse } from "../types/apiTypes";

const data: APIResponse = {
  userInfo: {
    name: "João",
  },
  paymentOptions: {
    pixOption: {
      installments: "1",
      installmentValue: 30500.0,
      cashbackAmount: 300,
      cashbackPercentage: 0.03,
    },
    installmentOptions: [
      {
        installments: "2",
        installmentValue: 15300.0,
        totalAmount: 30600,
        discount: 0,
      },
      {
        installments: "3",
        installmentValue: 10196.66,
        totalAmount: 30620,
        discount: 0,
      },
      {
        installments: "4",
        installmentValue: 7725.0,
        totalAmount: 30900.0,
        discount: 0.03,
      },
      {
        installments: "5",
        installmentValue: 6300.0,
        totalAmount: 31500.0,
        discount: 0,
      },
      {
        installments: "6",
        installmentValue: 5283.33,
        totalAmount: 31699.98,
        discount: 0,
      },
      {
        installments: "7",
        installmentValue: 4542.85,
        totalAmount: 31800.0,
        discount: 0,
      },
    ],
  },
};

export function getData(): APIResponse {
  return data;
}
