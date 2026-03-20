import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";

function App() {
  const navLinks = [
    {
      label: "Home",
      href: "/",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "About",
      href: "about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "Media",
      href: "media",
      ariaLabel: "Media",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "Results",
      href: "results",
      ariaLabel: "Results",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "Contact",
      href: "contact",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];

  return (
    <BrowserRouter>
      <Header
        logo={<span style={{ fontWeight: 700 }}>RB</span>}
        items={navLinks}
      />

      <Routes>
        <Route path="/" element={<CommingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
