import RoutesMain from "./routes";
import GlobalStyle from "./styles/globalStyles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1200}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        hideProgressBar={true}
        draggable
        theme="light"
      />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
};

export default App;
