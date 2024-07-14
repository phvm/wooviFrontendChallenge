import { RouterProvider } from "react-router-dom";
import router from "./router";
import UserContextProvider from "./utils/contexts/UserContext";
import PaymentContextProvider from "./utils/contexts/PaymentContext";

function App() {
  return (
    <UserContextProvider>
      <PaymentContextProvider>
        <RouterProvider router={router} />
      </PaymentContextProvider>
    </UserContextProvider>
  );
}

export default App;
