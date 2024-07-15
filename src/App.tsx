import { RouterProvider } from "react-router-dom";
import router from "./router";
import UserContextProvider from "./utils/contexts/UserContext";
import PaymentContextProvider from "./utils/contexts/PaymentContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserContextProvider>
      <PaymentContextProvider>
        <>
          <ToastContainer
            position="top-right"
            autoClose={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            theme="colored"
          />
          <RouterProvider router={router} />
        </>
      </PaymentContextProvider>
    </UserContextProvider>
  );
}

export default App;
