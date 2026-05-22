import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import ProductPage from "./pages/ProductPage"
import QuattroZeroQuattro from "./pages/QuattroZeroQuattro"


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotti/:id" element={<ProductPage />} />

          </Route>
          <Route element={<DefaultLayout />}>
            <Route path="*" element={<QuattroZeroQuattro />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
