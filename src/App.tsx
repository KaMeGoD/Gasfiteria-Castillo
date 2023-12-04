import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  'normalize.css';
import 'hover.css';
import '../src/App.css';


import { Home } from "./pages/Home.tsx";
import { CambiosGasfiteriayArtefactos } from "./pages/CambiosGasfiteriayArtefactos.tsx";
import { ReparacionTuberias } from "./pages/ReparacionTuberias.tsx";
import { DeteccionFugas } from "./pages/DeteccionFugas.tsx";
import { Hydrojet } from "./pages/Hydrojet.tsx";
import { VideoDuscopia } from "./pages/VideoDuscopia.tsx";
import { Destapes } from "./pages/Destapes.tsx";

import { NoPage } from "./pages/NoPage.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="destapes" element={<Destapes />} />
        <Route path="cambiosGasfiteriayArtefacto" element={<CambiosGasfiteriayArtefactos />} />
        <Route path="reparacionTuberias" element={<ReparacionTuberias />} />
        <Route path="deteccionFugas" element={<DeteccionFugas />} />
        <Route path="hidrojet" element={<Hydrojet />} />
        <Route path="videoDuscopia" element={<VideoDuscopia />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
