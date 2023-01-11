import { ToastContainer } from "react-toastify";
import { UnitiesProvider } from "./Providers/unitiesContext";
import { UserProvider } from "./Providers/UserContext";
import { RoutesMain as Routes } from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";

export const App = () => {
  return (
    <>
      <UserProvider>
        <UnitiesProvider>
          <Routes />
        </UnitiesProvider>
      </UserProvider>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
    </>
  );
};
