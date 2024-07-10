import { createBrowserRouter } from "react-router-dom";
import PaymentMethod from "./pages/paymentMethod";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div></div>
  },
  {
    path: '/paymentMethod',
    element: <PaymentMethod />
  }
])

export default router