import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Page2 from "./components/Page2";

export default function App() {
  return (
    <div className="font-Poppins">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<MainPage />}/>
           <Route path="/play" element ={<Page2 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}