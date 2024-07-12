import { createBrowserRouter } from "react-router-dom";
import PaymentMethod from "./pages/paymentMethod";
import Links from "./utils/constants";
import { Home } from "./pages/home";


const router = createBrowserRouter([
  {
    path: Links.home,
    element: < Home />
  },
  {
    path: '/paymentMethod',
    element: <PaymentMethod />
  }
])

export default router