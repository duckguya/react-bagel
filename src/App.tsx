import Header from "./Components/Header";
import Home from "./Routes/Home";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Header />
      <Home />
    </HelmetProvider>
  );
}

export default App;
