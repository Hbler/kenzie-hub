import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

import { Theme } from "./styles/theme";

function App() {
  return (
    <Theme>
      <AnimatePresence>
        <Routes />
        <ToastContainer style={{ fontWeight: "600" }} />
      </AnimatePresence>
    </Theme>
  );
}

export default App;
