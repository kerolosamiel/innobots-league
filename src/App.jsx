import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CommingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
