import { useEffect, useContext } from "react";
import Routing from "./routing";
import { useAuth } from "./hooks/getAuth";
import Sidebar from "./pages/Dashboard/SideBar/sideBar";

function App() {

  return (
    <>
   
     <Routing />
      
    </>
  );
}

export default App;
