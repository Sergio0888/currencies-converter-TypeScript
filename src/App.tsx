import React from "react";
import UserRoutes from "./pages/UserRoutes";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <UserRoutes />
    </>
  );
}


export default App;