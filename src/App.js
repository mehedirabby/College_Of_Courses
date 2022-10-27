import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routs/Routs";
import { useContext } from "react";
import { DarkThemeContext } from "./Pages/Shared/Header/DarkThemeContext";

function App() {
  const { mainColor } = useContext(DarkThemeContext);
  return (
    <div
      style={{
        backgroundColor: mainColor.bg,
        //color: mainColor.txt,
        height: "5000px",
      }}
    >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
