
import Navbar from "./components/navbar"
import {
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div className="mx-auto max-w-4xl w-full">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
