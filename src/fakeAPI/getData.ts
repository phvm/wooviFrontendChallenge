import { APIResponse } from "../types/apiTypes";

const data: APIResponse = {
  userInfo: {
    name: "João",
  },
  paymentOptions: {
    pixOption: {
      installments: 1,
      amount: 30500.0,
      refound: 0.03,
    },
    installmentOptions: [
      {
        installments: 2,
        amount: 30600,
        refound: 0,
      },
      {
        installments: 3,
        amount: 30620,
        refound: 0,
      },
      {
        installments: 4,
        amount: 30900.0,
        refound: 0.03,
      },
      {
        installments: 5,
        amount: 31500.0,
        refound: 0,
      },
      {
        installments: 6,
        amount: 31699.98,
        refound: 0,
      },
      {
        installments: 7,
        amount: 31800.0,
        refound: 0,
      },
    ],
  },
};

export function getData(): APIResponse {
  return data;
}
