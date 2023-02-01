import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import HeroBanner from "./components/hero-component/hero-banner/hero.component";
import Authentication from "./routes/authentication/authentication.component";
import Collections from "./components/collections/collection.component";
import ProductOverView from "./components/product-overview-component/product-overview";
import { useContext } from "react";
import { Product_Context } from "./contexts/product.context.component";

function App() {
  const { productOverView } = useContext(Product_Context);

  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index={true} element={<HeroBanner />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/collections" element={<Collections />} />
        <Route path={`/collectons/productview`} element={<ProductOverView />} />
      </Route>
    </Routes>
  );
}

export default App;
