import { createBrowserRouter } from "react-router-dom";
import PaymentMethod from "./pages/paymentMethod";
import Links from "./utils/constants";
import { Home } from "./pages/home";
import PixCreditCardPage from "./pages/pixCreditCardPage";
import CreditCardInstallments from "./pages/creditCardInstallments";

const router = createBrowserRouter([
  {
    path: Links.home,
    element: <Home />,
  },
  {
    path: Links.paymentMethod,
    element: <PaymentMethod />,
  },
  {
    path: Links.pixCredtCard,
    element: <PixCreditCardPage />,
  },
  {
    path: Links.creditCardInstallments,
    element: <CreditCardInstallments />,
  },
]);

export default router;
