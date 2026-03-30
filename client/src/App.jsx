import { useState, useEffect } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";
import DangNhap from "./components/DangNhap";
import UploadStory from "./components/UploadStory";
import ChiTietTruyen from "./components/ChiTietTruyen";

function App() {
  // Read initial view from URL path (e.g., /upload -> "upload")
  const getInitialView = () => {
    const path = window.location.pathname.replace(/^\/+/, ""); // remove leading slash
    return path.toLowerCase() || "home";
  };

  const [view, setView] = useState(getInitialView());

  // Update URL whenever view state changes
  useEffect(() => {
    if (view === "home") {
      window.history.replaceState(null, "", "/");
    } else {
      window.history.replaceState(null, "", `/${view}`);
    }
  }, [view]);

  // Navigate using State
  const goTo = (newView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  if (view === "register") {
    return <DangKy onBack={() => goTo("login")} />;
  }

  if (view === "login") {
    return <DangNhap onBack={() => goTo("home")} onRegister={() => goTo("register")} onSuccess={() => goTo("home")} />;
  }

  if (view === "upload") {
    return <UploadStory onHomeClick={() => goTo("home")} />;
  }

  if (view === "chitiettruyen") {
    return <ChiTietTruyen onHomeClick={() => goTo("home")} />;
  }

  return <PhamDucHuyTrangChu onUserClick={() => goTo("login")} onUploadClick={() => goTo("upload")} />;
}

export default App;