import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from "./components/FreeBook";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context_store/Authcontext";
// import { AuthProvider } from "./context_store/Authcontext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
